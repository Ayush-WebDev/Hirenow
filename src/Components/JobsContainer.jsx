import React, { useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import PaginationContainer from "./PaginationContainer";
import { FaLocationArrow } from "react-icons/fa6";
import { BsFillCalendarFill, BsFillBriefcaseFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteJob,
  editJobState,
  editJobVal,
  isReset,
} from "../features/Jobs/JobSlice";
import FilterJobs from "./FilterJobs";
const JobsContainer = () => {
  const {
    response: { jobs },
    meta,
  } = useLoaderData();
  const res = useLoaderData();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((store) => store.userState.user);
  const isDeleted = useSelector((store) => store.jobState.jobDeleted);
  if (isDeleted) {
    navigate("");
    dispatch(isReset());
  }
  return (
    <>
      <div className="bg-main dashboard-page">
        <div>
          <FilterJobs />
        </div>
        <h4 className="mb-10 text-xl text-neutral">{`${meta.totalJobs} ${
          meta.totalJobs > 1 ? "Jobs" : "Job"
        } found`}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {jobs?.map((job, index) => {
            const {
              company,
              jobLocation,
              jobType,
              position,
              status,
              createdAt,
              _id,
            } = job;
            let date = new Date(createdAt).toDateString();

            let companyIcon = company.substring(0, 1);
            return (
              <div
                key={index}
                className="card shadow-lg rounded-lg bg-base-100"
              >
                <div className=" flex flex-col gap-5">
                  <div className="flex flex-row p-5 items-center justify-start gap-5 pb-5 border-b border-solid border-[rgba(0,0,0,0.1)]">
                    <div className="rounded-[6px] font-semibold text-white flex items-center justify-center bg-primary w-12 h-12 border-r-0 text-center text-xl ">
                      {companyIcon}
                    </div>
                    <div>
                      <h2 className="card-title mb-1 capitalize ">
                        {position}
                      </h2>
                      <h3 className="text-xl">{company}</h3>
                    </div>
                  </div>
                  <div className="p-5 pt-1 grid grid-cols-2 gap-y-10 pb-10 ">
                    <div className="flex flex-row items-center justify-start gap-2">
                      <FaLocationArrow />
                      {jobLocation}
                    </div>
                    <div className="flex flex-row items-center gap-2">
                      <BsFillCalendarFill />
                      {date.substring(4)}
                    </div>
                    <div className="flex flex-row items-center capitalize gap-2">
                      <BsFillBriefcaseFill />
                      {jobType}
                    </div>
                    <div className="bg-[lightblue] font-medium px-5 capitalize flex flex-row justify-start max-w-fit items-center  text-neutral py-1 text-md rounded-md">
                      {status}
                    </div>
                    <div className="flex gap-5 col-span-1">
                      <button
                        className="btn btn-info text-[14px] py-0 leading-none min-h-[40px] h-10"
                        onClick={() => {
                          dispatch(editJobState());
                          dispatch(
                            editJobVal({
                              company,
                              jobLocation,
                              jobType,
                              position,
                              status,
                              createdAt,
                              _id,
                            })
                          );
                          navigate("/dashboard/add-job");
                        }}
                      >
                        Edit
                      </button>
                      <button
                        className="btn btn-error text-[14px] py-0 leading-none min-h-[40px] h-10 "
                        onClick={() => {
                          dispatch(deleteJob({ jobId: _id, token: token }));
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="text-center mt-10 flex flex-row justify-center items-center">
          {meta.totalJobs > 11 && <PaginationContainer />}
        </div>
      </div>
    </>
  );
};

export default JobsContainer;
