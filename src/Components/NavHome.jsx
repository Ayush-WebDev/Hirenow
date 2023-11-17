import React from "react";
import Sidebar from "./Sidebar";
import Header from "./Header";
const NavHome = () => {
  return (
    <>
      <div className="flex flex-row relative">
        <div className="relative">
          <Sidebar />
        </div>
        <Header />
      </div>
    </>
  );
};

export default NavHome;
