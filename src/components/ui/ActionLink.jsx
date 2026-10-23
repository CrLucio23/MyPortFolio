import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "@phosphor-icons/react";

const MotionLink = motion.create(Link);

export default function ActionLink({
  to,
  children,
  className = "",
  icon: Icon = ArrowUpRight,
  ...props
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const reduced = useReducedMotion();
  const springX = useSpring(x, { stiffness: 300, damping: 24 });
  const springY = useSpring(y, { stiffness: 300, damping: 24 });
  const Component = to ? MotionLink : motion.a;
  const move = (event) => {
    if (reduced || event.pointerType !== "mouse") return;
    const box = event.currentTarget.getBoundingClientRect();
    x.set(
      Math.max(
        -5,
        Math.min(5, (event.clientX - box.left - box.width / 2) * 0.06),
      ),
    );
    y.set(
      Math.max(
        -4,
        Math.min(4, (event.clientY - box.top - box.height / 2) * 0.08),
      ),
    );
  };
  return (
    <Component
      to={to}
      className={`btn ${className}`}
      style={{ x: springX, y: springY }}
      onPointerMove={move}
      onPointerLeave={() => {
        x.set(0);
        y.set(0);
      }}
      {...props}
    >
      <span>{children}</span>
      <span className="btn-icon">
        <Icon size={20} weight="light" aria-hidden="true" />
      </span>
    </Component>
  );
}
