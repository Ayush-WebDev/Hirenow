import React from "react";
import { AddJobNew, EditJob } from "../Components";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { redirect } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
export const actionAddJob =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    const job = {
      ...data,
      createdAt: new Date().toISOString(),
    };
    const { token } = store.getState().userState.user;

    let valForm = formData.get("formName");
    console.log(valForm);

    ////// Edit job ////

    if (valForm === "editJob") {
      const jobIdEdit = store.getState().jobState.jobVal._id;
      console.log(jobIdEdit);
      try {
        const response = await customFetch.patch(`/jobs/${jobIdEdit}`, data, {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        });
        toast.success("Job edited successfully");
        return redirect("/dashboard/jobs");
      } catch (error) {
        const errorMessage =
          error?.response?.data?.msg || "There was some error";
        toast.error(errorMessage);
        return null;
      }
    }
    ////// Add job ////
    else if (valForm === "addJob") {
      try {
        const response = await customFetch.post("/jobs", job, {
          headers: {
            Authorization: `Bearer ${token} `,
          },
        });
        toast.success("Job created successfully");

        return redirect("/dashboard/jobs");
      } catch (error) {
        const errorMessage =
          error?.response?.data?.msg || "There was some error";
        toast.error(errorMessage);
        return null;
      }
    }
  };

const AddJob = () => {
  const { editJob, jobVal } = useSelector((store) => store.jobState);
  const { company, position, jobType, jobLocation, status } = jobVal;
  return (
    <>
      <div className="bg-main dashboard-page min-h-screen">
        {!editJob ? (
          <AddJobNew />
        ) : (
          <EditJob
            position={position}
            company={company}
            jobLocation={jobLocation}
            jobType={jobType}
            status={status}
          />
        )}
      </div>
    </>
  );
};

export default AddJob;
