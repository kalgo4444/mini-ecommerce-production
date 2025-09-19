"use client";
import { ArrowUp } from "lucide-react";
import { memo, useEffect, useState } from "react";

const ScrollUp = () => {
  const [scroll, setScroll] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 300) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [scroll]);

  const handleScrollClick = (): void => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  if (scroll) {
    return (
      <button
        onClick={handleScrollClick}
        className="fixed bottom-5 right-5 z-50 size-14 bg-black text-white rounded-full grid place-items-center contain-paint"
      >
        <ArrowUp size={32} />
      </button>
    );
  } else {
    return;
  }
};

export default memo(ScrollUp);
