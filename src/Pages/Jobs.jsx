import React from "react";
import { customFetch } from "../utils";
import { JobsContainer } from "../Components";

export const loaderJobs =
  (store) =>
  async ({ request }) => {
    const newUrl = new URL(request.url).searchParams.entries();
    const params = Object.fromEntries([...newUrl]);
    const { search, status, jobType, sort, page } = params;
    const { token } = store.getState().userState.user;

    const url = search
      ? `/jobs?search=${search}&status=${status}&jobType=${jobType}&sort=${sort}&page=${page}`
      : `/jobs?status=${status ?? "all"}&jobType=${jobType ?? "all"}&sort=${
          sort ?? "latest"
        }&page=${page}`;
    try {
      const response = await customFetch(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return {
        response: response.data,
        meta: {
          numOfPages: response.data.numOfPages,
          totalJobs: response.data.totalJobs,
        },
        params,
      };
    } catch (error) {
      console.log(error);
      toast.error("There was an error,please try again");
      return null;
    }
  };

const Jobs = () => {
  return (
    <div className=" bg-main  min-h-screen">
      <JobsContainer />
    </div>
  );
};

export default Jobs;
