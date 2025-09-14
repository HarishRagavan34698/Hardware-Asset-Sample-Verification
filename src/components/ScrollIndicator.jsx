import React, { useEffect, useState } from "react";


export default function ScrollIndicator({ scrollRef, height = "100%" }) {
  const [scrollRatio, setScrollRatio] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;

      const maxScroll = el.scrollHeight - el.clientHeight;
      const ratio = maxScroll > 0 ? el.scrollTop / maxScroll : 0;
      setScrollRatio(ratio);
    };

    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
    }

    return () => {
      el?.removeEventListener("scroll", handleScroll);
    };
  }, [scrollRef]);

  return (
    <div className="scroll-indicator-track" style={{ height }}>
      <div
        className="scroll-indicator-thumb"
        style={{ top: `${scrollRatio * 100}%` }}
      />
    </div>
  );
}
