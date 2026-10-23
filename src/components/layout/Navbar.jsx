import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, X } from "@phosphor-icons/react";
import { useLanguage } from "../../i18n/LanguageProvider";
import LanguageSwitch from "../ui/LanguageSwitch";

export default function Navbar() {
  const { copy, localPath } = useLanguage();
  const { pathname, hash } = useLocation();
  const [open, setOpen] = useState(false);
  const dialog = useRef(null);
  const menuButton = useRef(null);
  const links = [
    { path: "/", label: copy.nav.home, active: pathname === "/" && !hash },
    {
      path: "/#projects",
      label: copy.nav.projects,
      active: pathname === "/" && hash === "#projects",
    },
    { path: "/about", label: copy.nav.about, active: pathname === "/about" },
    {
      path: "/contact",
      label: copy.nav.contact,
      active: pathname === "/contact",
    },
  ];

  useEffect(() => {
    setOpen(false);
  }, [pathname, hash]);
  useEffect(() => {
    if (!open) {
      if (dialog.current?.open) {
        dialog.current.close();
        menuButton.current?.focus({ preventScroll: true });
      }
      return;
    }
    dialog.current.showModal();
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const desktop = matchMedia("(min-width: 768px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => {
      document.body.style.overflow = previousOverflow;
      desktop.removeEventListener("change", closeOnDesktop);
    };
  }, [open]);

  const keepFocusInMenu = (event) => {
    if (event.key !== "Tab") return;
    const controls = [
      ...dialog.current.querySelectorAll("a[href], button:not([disabled])"),
    ];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <header className="site-header">
        <Link
          to={localPath("/")}
          className="brand"
          aria-label={copy.nav.homeLabel}
        >
          <span className="brand-monogram" aria-hidden="true">
            lc<span>.</span>
          </span>
          <span className="brand-name">
            Luciano
            <br />
            Cretella
          </span>
        </Link>
        <nav className="desktop-nav" aria-label={copy.nav.label}>
          {links.map(({ path, label, active }) => (
            <Link
              key={path}
              to={localPath(path)}
              className={`nav-link ${active ? "is-active" : ""}`}
              aria-current={active ? "page" : undefined}
            >
              {label}
              {path === "/contact" && (
                <ArrowUpRight size={15} aria-hidden="true" />
              )}
            </Link>
          ))}
        </nav>
        <div className="header-controls">
          <LanguageSwitch />
          <button
            className="menu-toggle"
            type="button"
            ref={menuButton}
            onClick={() => setOpen(true)}
            aria-label={copy.nav.open}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            <span />
            <span />
          </button>
        </div>
      </header>
      <dialog
        className="mobile-menu"
        id="mobile-menu"
        ref={dialog}
        aria-labelledby="menu-title"
        onKeyDown={keepFocusInMenu}
        onCancel={(event) => {
          event.preventDefault();
          setOpen(false);
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) setOpen(false);
        }}
      >
        <div className="mobile-menu-inner">
          <div className="mobile-menu-top">
            <span className="eyebrow" id="menu-title">
              {copy.nav.menu}
            </span>
            <button
              className="icon-button"
              type="button"
              onClick={() => setOpen(false)}
              aria-label={copy.nav.close}
              autoFocus
            >
              <X size={24} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label={copy.nav.label}>
            {links.map(({ path, label, active }, index) => (
              <Link
                key={path}
                to={localPath(path)}
                aria-current={active ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                <span className="menu-number">0{index + 1}</span>
                <span>{label}</span>
                <ArrowUpRight size={24} aria-hidden="true" />
              </Link>
            ))}
          </nav>
          <p className="mobile-menu-note">{copy.nav.menuNote}</p>
          <LanguageSwitch />
        </div>
      </dialog>
    </>
  );
}
