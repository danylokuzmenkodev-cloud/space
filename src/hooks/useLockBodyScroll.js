import { useEffect } from "react";

/**
 * Lock or unlock body scroll.
 *
 * @param {boolean} isLocked - If true, body scrolling is disabled.
 */
export function useLockBodyScroll(isLocked = false) {
  useEffect(() => {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    if (isLocked) {
      document.body.style.overflow = "hidden";
      document.body.style.paddingRight = `${scrollBarWidth}px`;
    }

    // Cleanup function: always reset styles
    return () => {
      document.body.style.overflow = "";
      document.body.style.paddingRight = "";
    };
  }, [isLocked]);
}
