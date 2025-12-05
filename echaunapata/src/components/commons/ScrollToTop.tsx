import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

// ...existing code...

export default function ScrollToTop() {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Don't scroll on POP (back/forward) so browser can restore position
    if (navigationType === "POP") return;

    // If there's a hash (anchor) let the browser handle it
    if (location.hash) return;

    // If location.state explicitly asks to preserve scroll or marks a modal/background, skip
    const state: any = location.state as any;
    if (state && (state.preserveScroll === true || state.background || state.modal)) return;

    // Otherwise, scroll to top
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash, navigationType, location.state]);

  return null;
}

