import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { messages, languages } from "../src/i18n/messages.js";

const paths = ["/", "/about", "/contact", "/pagina-inesistente"];
const titleKeys = ["home", "about", "contact", "notFound"];

function leafKeys(value, prefix = "") {
  return Object.entries(value)
    .flatMap(([key, entry]) =>
      typeof entry === "string"
        ? [`${prefix}${key}`]
        : leafKeys(entry, `${prefix}${key}.`),
    )
    .sort();
}

test("each language covers the complete translation dictionary", () => {
  for (const { code } of languages) {
    expect(leafKeys(messages[code])).toEqual(leafKeys(messages.it));
    expect(JSON.stringify(messages[code])).not.toContain(':""');
  }
});

for (const language of ["it", "en"]) {
  for (const width of [320, 390, 768, 1024, 1440]) {
    test(`${language}: every route fits a ${width}px viewport`, async ({
      page,
    }) => {
      const errors = [];
      page.on("pageerror", (error) => errors.push(error.message));
      await page.setViewportSize({ width, height: 900 });
      for (const [index, path] of paths.entries()) {
        await page.goto(`${path}?lang=${language}`);
        await expect(page.locator("html")).toHaveAttribute("lang", language);
        await expect(page).toHaveTitle(
          `${messages[language].meta[titleKeys[index]]} | Luciano Cretella`,
        );
        await expect(page.locator("main h1")).toHaveCount(1);
        await expect(page.locator("main h1")).toBeVisible();
        await page.evaluate(() => document.fonts.ready);
        const layout = await page.evaluate(async () => {
          const pictures = [...document.querySelectorAll("main img")];
          for (const picture of pictures) {
            picture.loading = "eager";
            await picture.decode().catch(() => {});
          }
          const viewport = document.documentElement.clientWidth;
          const overflow = [
            ...document.querySelectorAll("main *, header *, footer *"),
          ]
            .filter((element) => {
              if (
                element.classList.contains("sr-only") ||
                !element.getClientRects().length
              )
                return false;
              const box = element.getBoundingClientRect();
              // The cropped portrait image deliberately extends within its frame.
              if (
                element.matches(".portrait-photo img, .profile-card-image img")
              )
                return false;
              return (
                box.width > 0 && (box.right > viewport + 1 || box.left < -1)
              );
            })
            .map((element) => `${element.tagName}.${element.className}`);
          return {
            width: document.documentElement.scrollWidth,
            viewport,
            overflow,
            imagesLoaded: pictures.every((picture) => picture.naturalWidth > 0),
          };
        });
        expect(layout.width).toBeLessThanOrEqual(layout.viewport + 1);
        expect(layout.overflow).toEqual([]);
        expect(layout.imagesLoaded).toBe(true);
        await expect(
          page
            .getByRole("button", {
              name: language === "it" ? "Italiano" : "English",
              exact: true,
            })
            .first(),
        ).toHaveAttribute("aria-pressed", "true");
      }
      expect(errors).toEqual([]);
    });
  }
}

test("language selection survives navigation and reload; a shared URL takes priority", async ({
  page,
}) => {
  await page.goto("/?lang=it");
  await page
    .getByRole("button", { name: "English", exact: true })
    .first()
    .click();
  await expect(page.locator("h1")).toHaveText("The human sideof digital.");
  await expect(page).toHaveURL(/lang=en/);
  await expect(page.locator('meta[name="description"]')).toHaveAttribute(
    "content",
    messages.en.meta.description,
  );
  await expect(page.locator('meta[property="og:locale"]')).toHaveAttribute(
    "content",
    "en_GB",
  );
  await expect(page.locator(".portrait-photo img")).toHaveAttribute(
    "alt",
    messages.en.common.portrait,
  );
  await page.locator(".about-introduction .text-link").click();
  await expect(page).toHaveURL(/about\?lang=en/);
  await expect(page).toHaveTitle(
    messages.en.meta.about + " | Luciano Cretella",
  );
  await page.reload();
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator(".profile-role")).toHaveText(
    messages.en.about.role,
  );
  await page.goto("/contact");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await expect(page.locator(".social-heading")).toHaveText(
    messages.en.contact.elsewhere,
  );
  await page.goto("/about?lang=it");
  await expect(page.locator("html")).toHaveAttribute("lang", "it");
  await expect(page.locator(".profile-role")).toHaveText(
    messages.it.about.role,
  );
});

test("mobile navigation supports keyboard, dismissal and language changes", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/?lang=it");
  const toggle = page.getByRole("button", {
    name: messages.it.nav.open,
    exact: true,
  });
  await toggle.click();
  const menu = page.getByRole("dialog");
  await expect(menu).toBeVisible();
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await menu
    .getByRole("button", { name: messages.it.nav.close, exact: true })
    .focus();
  await page.keyboard.press("Shift+Tab");
  await expect(
    menu.getByRole("button", { name: "English", exact: true }),
  ).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(
    menu.getByRole("button", { name: messages.it.nav.close, exact: true }),
  ).toBeFocused();
  await menu.getByRole("button", { name: "English", exact: true }).click();
  await expect(menu.getByRole("link", { name: /About me/ })).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(menu).not.toBeVisible();
  await expect(
    page.getByRole("button", { name: messages.en.nav.open, exact: true }),
  ).toBeFocused();
  await page
    .getByRole("button", { name: messages.en.nav.open, exact: true })
    .click();
  await menu.getByRole("link", { name: /About me/ }).click();
  await expect(page).toHaveURL(/about\?lang=en/);
  await expect(menu).not.toBeVisible();
  expect(await page.evaluate(() => document.body.style.overflow)).toBe("");
  await page
    .getByRole("button", { name: messages.en.nav.open, exact: true })
    .click();
  await page.setViewportSize({ width: 1024, height: 900 });
  await expect(menu).not.toBeVisible();
  await expect(page.locator(".desktop-nav")).toBeVisible();
});

test("project anchor stays visible below the header and language switches preserve position", async ({
  page,
}) => {
  await page.goto("/?lang=it");
  await page.locator(".hero-actions .btn").click();
  await expect(page).toHaveURL(/lang=it#projects/);
  await expect(page.locator("#project-title")).toBeInViewport();
  await expect
    .poll(() =>
      page
        .locator("#projects")
        .evaluate((element) => Math.round(element.getBoundingClientRect().top)),
    )
    .toBeLessThanOrEqual(121);
  const position = await page.evaluate(() => window.scrollY);
  // Use the visible sticky control: locator.click auto-scrolls its original layout box in Chromium.
  const languageControl = await page
    .getByRole("button", { name: "English", exact: true })
    .first()
    .boundingBox();
  expect(languageControl).not.toBeNull();
  await page.mouse.click(
    languageControl.x + languageControl.width / 2,
    languageControl.y + languageControl.height / 2,
  );
  await expect(page).toHaveURL(/lang=en#projects/);
  await expect(page.locator("#project-title")).toHaveText(
    "Thoughtfully made.Out in the world.",
  );
  expect(
    Math.abs((await page.evaluate(() => window.scrollY)) - position),
  ).toBeLessThan(160);
});

test("original CV and contact destinations remain available", async ({
  page,
  request,
}) => {
  await page.goto("/about?lang=en");
  await expect(page.locator(".profile-card a[download]")).toHaveAttribute(
    "href",
    "/Curriculum_Luciano_Cretella.pdf",
  );
  await expect(page.locator(".file-caption")).toHaveText("PDF · In Italian");
  const document = await request.get("/Curriculum_Luciano_Cretella.pdf");
  expect(document.ok()).toBe(true);
  expect(document.headers()["content-type"]).toContain("application/pdf");
  await page.goto("/contact?lang=en");
  await expect(page.locator(".email-card")).toHaveAttribute(
    "href",
    "mailto:lcretella23@gmail.com",
  );
  await expect(page.getByRole("link", { name: /WhatsApp/ })).toHaveAttribute(
    "href",
    "https://wa.me/393200349829",
  );
});

test("English browser preference and unavailable storage do not break translation", async ({
  browser,
}) => {
  const context = await browser.newContext({
    locale: "en-GB",
    reducedMotion: "reduce",
  });
  await context.addInitScript(() => {
    Object.defineProperty(window, "localStorage", {
      get() {
        throw new Error("Storage disabled");
      },
    });
  });
  const page = await context.newPage();
  await page.goto("http://127.0.0.1:5176/?lang=unsupported");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");
  await page
    .getByRole("button", { name: "Italiano", exact: true })
    .first()
    .click();
  await expect(page.locator("html")).toHaveAttribute("lang", "it");
  await context.close();
});

test("translated pages and open menu have no WCAG AA accessibility violations", async ({
  page,
}) => {
  for (const path of paths) {
    await page.goto(`${path}?lang=en`);
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(result.violations).toEqual([]);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page
    .getByRole("button", { name: messages.en.nav.open, exact: true })
    .click();
  const result = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(result.violations).toEqual([]);
});
