import React from "react";
import TaskBox from "./TaskBox.jsx";
import "../styles/EmployeeDetails.css";
import ScrollableTasks from "./ScrollableTasks.jsx";

const EmployeeDetails = ({ name, number, tasks }) => (
  <div className="employee-card">
    {/* Down arrow in top-right corner */}
    <div className="employee-collapse">
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="#6b7280"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>

    {/* Header */}
    <div className="employee-header">
      {name} <span>({number})</span>
    </div>

    {/* Status indicators */}
    <div className="employee-status">
      <span className="status-item">
        <span className="status-dot status-office"></span> Work From Office
      </span>
      <span className="status-item">
        <span className="status-dot status-home"></span> Work From Home
      </span>
      <span className="status-item">
        <span className="status-dot status-leave"></span> Leave
      </span>
      <span className="status-item">
        <span className="status-dot status-undeclared"></span> Not Declared
      </span>
      <span className="status-item">
        <span className="status-dot status-holiday"></span> Holiday
      </span>
    </div>

    {/* Table Headers */}
    <div className="task-table-header">
      <div className="header-date">
        <span>Declaration Date</span>
      </div>
      <div className="header-description" style={{ flex: 1 }}>
        <span >Task Description</span>
        
      </div>
    </div>

    {/* Tasks */}
    <ScrollableTasks>
          {tasks.map((task, idx) => (
            <TaskBox key={idx} {...task} />
          ))}
      </ScrollableTasks>
  </div>
);

export default EmployeeDetails;
