import React from "react";
import Sidebar from "./SideBar";
import Header from "./Header";

const LayoutWrapper = ({ children, menuItems }) => (
  <>
    <Header />
    <div className="flex h-screen">
      <Sidebar menuItems={menuItems} />
      <div className="flex-1">{children}</div>
    </div>
  </>
);

export default LayoutWrapper;
