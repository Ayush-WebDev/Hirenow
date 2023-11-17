import React from "react";
import { customFetch } from "../utils/index";
import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Stats, ChartsContainer } from "../Components";

export const loaderDashboard = (store) => async () => {
  const user = store.getState().userState.user;
  const token = store.getState().userState.user.token;
  if (!user) {
    return redirect("/");
  }
  try {
    const response = await customFetch.get("/jobs/stats", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response;
  } catch (error) {
    toast.error(error);
    return null;
  }
};

const Dashboard = () => {
  return (
    <>
      <div className=" bg-main dashboard-page min-h-screen">
        <Stats />
        <ChartsContainer />
      </div>
    </>
  );
};

export default Dashboard;
