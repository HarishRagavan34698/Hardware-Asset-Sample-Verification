import { useRef } from "react";
import "../styles/ScrollableTasks.css";
import ScrollIndicator from "./ScrollIndicator.jsx";

export default function ScrollableTasks({ children }) {
  const scrollRef = useRef(null);

  const scrollUp = () => {
    scrollRef.current.scrollBy({ top: -15, behavior: "smooth" });
  };

  const scrollDown = () => {
    scrollRef.current.scrollBy({ top: 15, behavior: "smooth" });
  };

  return (
    <div className="scrollable-container" style={{ position: "relative" }}>
      {/* Up Button */}

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        style={{
          maxHeight: "500px", // adjust height as needed
          overflowY: "auto",
          paddingRight: "10px",
        }}
      >
        {children}
      </div>

      <ScrollIndicator scrollRef={scrollRef} height="200px" />
      {/* Down Button */}
    </div>
  );
}
