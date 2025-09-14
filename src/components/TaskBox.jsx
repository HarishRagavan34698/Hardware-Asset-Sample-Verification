import React from "react";
import "../styles/TaskBox.css";

const dayTypeColors = {
  "Work From Office": { bg: "#C8F7C5", color: "#000000" },
  "Work From Home": { bg: "#D6E6FF", color: "#000000" },
  Leave: { bg: "#FFE6E6", color: "#000000" },
  "Not Declared": { bg: "#FFF7CC", color: "#000000" },
  Holiday: { bg: "#B3E5FC", color: "#000000" },
  Hybrid: { bg: "#000000", color: "#ffffff" },
};

const TaskBox = ({ declarationDate, type, days, description }) => (
  <div className="task-box">
    {/* Left side: date + type + days */}
    <div className="task-left">
      <div className="task-date">
        {/* Calendar icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8 2V5M16 2V5M3 10H21M5 4H19C20.1046 4 21 4.89543 21 6V20C21 21.1046 20.1046 22 19 22H5C3.89543 22 3 21.1046 3 20V6C3 4.89543 3.89543 4 5 4Z"
            stroke="#38AEE0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {declarationDate}
        {/* Info icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="10" stroke="#38AEE0" strokeWidth="2" />
          <path
            d="M12 16V12M12 8H12.01"
            stroke="#38AEE0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="task-type">{type}</div>

      <div className="task-days">
        {days.map((item, idx) => {
          const { bg } = dayTypeColors[item.type] || dayTypeColors["Not Declared"];
          const isHybrid = item.type === "Hybrid";
          return (
            <span
              key={idx}
              className={`task-day ${ isHybrid ? "hybrid-day" : ""}`}
              style={{ 
                background: bg,
                fontWeight: isHybrid ? "bold" : "normal",
               }}
            >
              {item.day}
            </span>
          );
        })}
      </div>
    </div>

    {/* Right side: description */}
    <div className="task-right">
      <div className="task-title">
        High quality rich text editor for the web
      </div>
      <div className="task-description">{description}</div>
    </div>
  </div>
);

export default TaskBox;
