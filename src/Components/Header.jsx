import React from "react";
import { RxAvatar } from "react-icons/rx";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../features/User/UserSlice";
import { FaCaretDown } from "react-icons/fa";
import { logoutUser } from "../features/User/UserSlice";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { name } = useSelector((store) => store.userState.user);
  const sidebarOpen = useSelector((store) => store.userState.sidebar);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <>
      <div className="sm:px-10 px-4 py-8 sm:py-10 flex flex-row justify-between items-center gap-4">
        <div className="flex flex-col items-center justify-center">
          <button
            onClick={() => {
              dispatch(toggleSidebar());
            }}
          >
            <HiBars3CenterLeft className="w-8 sm:w-10 h-auto text-primary font-bold" />
          </button>
        </div>
        <div>
          <h1 className="text-[8vw] sm:text-4xl font-medium capitalize text-neutral">
            Dashboard
          </h1>
        </div>
        <div className={`${sidebarOpen && "z-[-1]"}  lg:z-10`}>
          <details className="dropdown  sm:z-10">
            <summary className="btn relative capitalize rounded-lg flex-nowrap max-w-20 py-[5px] text-sm sm:text-lg sm:py-[10px] w-full flex flex-row items-center text-center text-white bg-primary  hover:bg-[#6eb2ff]">
              <RxAvatar className="w-4 h-4 sm:w-6 sm:h-6" />
              {name}
              <FaCaretDown />
            </summary>
            <ul className="p-2 menu dropdown-content z-[1]  bg-base-100 w-full shadow mt-2 rounded-md ">
              <li>
                <button
                  className="hover:bg-white text-lg font-semibold 
                hover:underline focus:bg-white active:bg-white "
                  onClick={() => {
                    dispatch(logoutUser());
                    navigate("/");
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </details>
        </div>
      </div>
    </>
  );
};

export default Header;
