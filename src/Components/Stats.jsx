import React from "react";
import { useLoaderData } from "react-router-dom";
import { MdLuggage } from "react-icons/md";
import { FaCalendarCheck } from "react-icons/fa";
import { FaBug } from "react-icons/fa6";

const Stats = () => {
  const { data } = useLoaderData();
  const {
    defaultStats: { pending, interview, declined },
  } = data;
  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-row lg:flex-wrap  gap-5">
        <div className="px-5 py-8 rounded-xl border-b-4 lg:w-[30.3%] flex flex-col justify-between border-b-[#da7045] bg-white">
          <div className="flex flex-row justify-between">
            <div className="text-4xl font-bold text-[#da7045]">{pending}</div>
            <div className="bg-[#da7045] text-white w-9 h-9 flex flex-row justify-center items-center rounded-[5px]">
              <MdLuggage className="w-8 h-8" />
            </div>
          </div>
          <h4 className="mt-8 text-3xl text-[#da7045]">Pending applications</h4>
        </div>
        <div className="px-5 py-8 rounded-xl lg:w-[30.3%]  flex flex-col justify-between border-b-4 border-b-[#4548da] bg-white">
          <div className="flex flex-row justify-between">
            <div className="text-4xl font-bold text-[#4548da]">{interview}</div>
            <div className="bg-[#4548da] text-white w-9 h-9 flex flex-row justify-center items-center rounded-[5px]">
              <FaCalendarCheck className="w-7 h-7" />
            </div>
          </div>
          <h4 className="mt-8 text-3xl text-[#4548da]">Interviews</h4>
        </div>
        <div className="px-5 py-8 rounded-xl lg:w-[30.3%] border-b-4 border-b-[#da4548] bg-white flex flex-col justify-between">
          <div className="flex flex-row justify-between">
            <div className="text-4xl font-bold text-[#da4548]">{declined}</div>
            <div className="bg-[#da4548] text-white w-9 h-9 flex flex-row justify-center items-center rounded-[5px]">
              <FaBug className="w-7 h-7" />
            </div>
          </div>
          <h4 className="mt-8 text-3xl text-[#da4548]">
            Declined applications
          </h4>
        </div>
      </div>
    </>
  );
};

export default Stats;
