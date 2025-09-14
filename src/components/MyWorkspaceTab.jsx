import React from "react";
import TabArrow from "./TabArrow";

const MyWorkspaceTab = ({ active }) => (
  <div className="navbar-tab-wrapper">
    <button className={`navbar-tab${active ? " active" : ""}`}>My Workspace</button>
    {active && <TabArrow />}
  </div>
);

export default MyWorkspaceTab;