import React from "react";
import Logo from "./Logo";
import { pages } from "../data";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../features/User/UserSlice";
import { RxCross2 } from "react-icons/rx";
const Sidebar = () => {
  const sidebarOpen = useSelector((store) => store.userState.sidebar);
  const dispatch = useDispatch();
  return (
    <>
      <div
        className={`lg:w-[300px] hidden sm:hidden   lg:flex lg:flex-col lg:py-10 
        lg:pl-[40px] lg:pr-10 lg:min-h-screen transition-all duration-300 ease-in-out ${
          sidebarOpen
            ? " lg:ml-[-300px] duration-1000 ease-in-out"
            : " ml-0 duration-1000 ease-in-out w-full"
        } `}
      >
        <div className="mb-[20%]">
          <Logo />
        </div>
        <div className="flex flex-col items-start max-w-[200px]">
          {pages.map((page, index) => {
            const { text, path, icon } = page;
            return (
              <NavLink
                key={index}
                className={({ isActive }) => {
                  return isActive ? "nav-link active" : "nav-link";
                }}
                to={path}
                end
              >
                <span className=" flex-grow-0 flex-shrink-0">{icon}</span>
                {text}
              </NavLink>
            );
          })}
        </div>
      </div>

      {/* Mobile sidebar */}
      <div
        className={`lg:hidden ${
          !sidebarOpen ? "hidden" : "block"
        } fixed w-full min-h-screen bg-[rgba(0,0,0,0.3)] px-5 py-5 z-10 h-screen`}
      >
        <div className="w-full  px-10 pt-16 pb-10 h-[100%] relative bg-white z-[100] flex flex-col items-center gap-y-10 ">
          <button
            className=" absolute right-5 top-7 sm:top-10 sm:right-10 "
            onClick={() => {
              dispatch(toggleSidebar());
            }}
          >
            <RxCross2 className="w-8 h-8 font-bold" />
          </button>
          <div className="mb-5">
            <h2 className="text-4xl font-bold mb-5 whitespace-nowrap">
              <span className="px-2 py-1 text-white rounded-lg bg-primary ">
                H
              </span>
              <span className="text-neutral">ire now</span>
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center   mx-auto text-center">
            {pages.map((page, index) => {
              const { text, path, icon } = page;
              return (
                <NavLink
                  key={index}
                  className="py-3 px-5 hover:bg-primary hover:pl-6 
                  duration-300 ease hover:text-white rounded-xl hover:rounded-xl text-2xl  
                  capitalize flex flex-row items-center w-full  justify-center gap-5 mb-10"
                  to={path}
                  end
                >
                  <span className=" flex-grow-0 flex-shrink-0">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
