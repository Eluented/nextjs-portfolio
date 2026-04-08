import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Cursor() {
  const [mounted, setMounted] = useState(false);
  const [isHoveringActionable, setIsHoveringActionable] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const pointerX = useMotionValue(-300);
  const pointerY = useMotionValue(-300);
  const litElementRef = useRef(null);

  // Keep the cursor responsive so it feels attached to the pointer.
  const ringX = useSpring(pointerX, { stiffness: 760, damping: 42, mass: 0.18 });
  const ringY = useSpring(pointerY, { stiffness: 760, damping: 42, mass: 0.18 });

  useEffect(() => {
    if (!window.matchMedia("(pointer: fine)").matches) return;

    setMounted(true);
    document.body.classList.add("cursor-ready");

    const onMove = ({ clientX, clientY }) => {
      pointerX.set(clientX);
      pointerY.set(clientY);
      setIsVisible(true);

      const hoveredElement = document
        .elementFromPoint(clientX, clientY)
        ?.closest("[data-spotlight='true']");

      if (litElementRef.current && litElementRef.current !== hoveredElement) {
        litElementRef.current.style.removeProperty("--spot-x");
        litElementRef.current.style.removeProperty("--spot-y");
      }

      if (hoveredElement) {
        const bounds = hoveredElement.getBoundingClientRect();
        const x = ((clientX - bounds.left) / bounds.width) * 100;
        const y = ((clientY - bounds.top) / bounds.height) * 100;

        hoveredElement.style.setProperty("--spot-x", `${x.toFixed(2)}%`);
        hoveredElement.style.setProperty("--spot-y", `${y.toFixed(2)}%`);
      }

      litElementRef.current = hoveredElement || null;
    };

    const onOver = ({ target }) => {
      const el = target.closest(
        'a, button, [role="button"], label, input, textarea, select, [data-cursor="hover"]'
      );
      setIsHoveringActionable(Boolean(el));
    };

    const onLeave = () => {
      setIsVisible(false);
      pointerX.set(-300);
      pointerY.set(-300);
      setIsHoveringActionable(false);

      if (litElementRef.current) {
        litElementRef.current.style.removeProperty("--spot-x");
        litElementRef.current.style.removeProperty("--spot-y");
        litElementRef.current = null;
      }
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseover", onOver);
    document.documentElement.addEventListener("mouseleave", onLeave);

    return () => {
      document.body.classList.remove("cursor-ready");
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseover", onOver);
      document.documentElement.removeEventListener("mouseleave", onLeave);
    };
  }, [pointerX, pointerY]);

  if (!mounted) return null;

  return (
    <motion.div
      className="cursor-circle"
      style={{ x: ringX, y: ringY }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isHoveringActionable ? 1.28 : 1,
        boxShadow: isHoveringActionable
          ? "0 0 0 1px rgba(79,156,255,0.42), 0 0 22px rgba(79,156,255,0.42), 0 8px 24px rgba(0,0,0,0.3)"
          : "0 0 0 1px rgba(255,255,255,0.1), 0 8px 24px rgba(0,0,0,0.3)",
      }}
      transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
      aria-hidden="true"
    />
  );
}
