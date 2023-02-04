import { useEffect } from "react";

export const useOutsideClick = (
  ref: React.MutableRefObject<HTMLElement | null>,
  callback: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);
};
