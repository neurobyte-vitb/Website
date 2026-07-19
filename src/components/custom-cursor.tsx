import { useEffect } from "react";

const defaultCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Cpath d='M7 4.5 24.5 16 16.2 18.2 13.8 27.5 7 4.5Z' fill='%2307141e' stroke='%236ef3ff' stroke-width='1.6' stroke-linejoin='round'/%3E%3Cpath d='M12.2 11.2 20.4 16.1 15.4 17.3 13.9 22.8Z' fill='%23b6faff' fill-opacity='.72'/%3E%3Ccircle cx='23.8' cy='8.2' r='2.2' fill='%23ff4fd8'/%3E%3Cpath d='M20.8 8.2h6M23.8 5.2v6' stroke='%236ef3ff' stroke-width='.9' stroke-linecap='round'/%3E%3C/svg%3E") 7 5, auto`;

const pointerCursor = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='32' height='32' viewBox='0 0 32 32'%3E%3Ccircle cx='16' cy='16' r='11' fill='%2307141e' stroke='%23ff4fd8' stroke-width='1.8'/%3E%3Ccircle cx='16' cy='16' r='3.6' fill='%236ef3ff'/%3E%3Cpath d='M16 2.8v6M16 23.2v6M2.8 16h6M23.2 16h6' stroke='%236ef3ff' stroke-width='1.2' stroke-linecap='round'/%3E%3Cpath d='m11.8 11.8 8.4 8.4M20.2 11.8l-8.4 8.4' stroke='%23ff4fd8' stroke-width='1' stroke-linecap='round'/%3E%3C/svg%3E") 16 16, pointer`;

/**
 * CustomCursor — now uses native CSS cursors instead of a requestAnimationFrame
 * DOM cursor. That removes the per-frame work entirely, so pointer movement is
 * handled by the OS/browser at full refresh rate with no trailing lag.
 */
export function CustomCursor() {
  useEffect(() => {
    if (matchMedia("(pointer: coarse)").matches) return;

    const style = document.createElement("style");
    style.dataset.neurobyteCursor = "true";
    style.textContent = `
      html, body, body * { cursor: ${defaultCursor}; }
      a, button, [role="button"], input, textarea, select, summary, label, [data-cursor],
      a *, button *, [role="button"] *, label * { cursor: ${pointerCursor}; }
      input[type="text"], input[type="email"], input[type="search"], textarea { cursor: text; }
    `;
    document.head.appendChild(style);

    return () => {
      style.remove();
    };
  }, []);

  return null;
}
