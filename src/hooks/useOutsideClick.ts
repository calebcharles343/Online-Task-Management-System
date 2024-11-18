import { useEffect, useRef, RefObject } from "react";

interface ClickProps {
  ref: RefObject<HTMLDivElement>;
}

export function useOutsideClick(
  handler: () => void,
  listenCapturing: boolean = true
): ClickProps {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    document.addEventListener("click", handleClick, listenCapturing);
    return () => {
      document.removeEventListener("click", handleClick, listenCapturing);
    };
  }, [handler, listenCapturing]);

  return { ref };
}
