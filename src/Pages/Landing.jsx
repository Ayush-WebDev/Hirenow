import React from "react";
import heroImg from "../assets/main.svg";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <>
      <div className="  bg-[#f0f4f8]">
        <div className="flex flex-row items-center justify-start px-5 mx-auto  sm:px-10 py-10 max-w-[1440px] ">
          <div>
            <h2 className="text-3xl font-bold ">
              <span className="px-2 py-1 text-white rounded-lg bg-primary">
                H
              </span>
              <span className="text-neutral">ire now</span>
            </h2>
          </div>
        </div>
        <div className=" max-w-[1440px] px-5 mx-auto  sm:px-10 pt-32 flex flex-col gap-10 sm:flex-row justify-between items-start min-h-screen">
          <div className="sm:max-w-[50%]">
            <h1 className="text-6xl text-neutral font-medium tracking-tight ">
              Job <span className="text-primary">Tracking</span> App
            </h1>
            <p className="text-xl mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur voluptates eligendi quibusdam obcaecati eveniet?
              Aspernatur nam amet libero perferendis adipisci?
            </p>
            <Link className="btn btn-primary mt-10 text-xl" to="/register">
              Loging / register
            </Link>
          </div>
          <div>
            <img className="max-w-[80%]" src={heroImg} alt="Jobster" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Landing;
