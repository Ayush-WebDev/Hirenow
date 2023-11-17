import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./store";
import {
  Dashboard,
  Landing,
  Login,
  Profile,
  Register,
  Jobs,
  Error,
  DashboardLayout,
  AddJob,
} from "./Pages";

/// actions
import { actionLogin } from "./Pages/Login";
import { actionRegister } from "./Pages/Register";
import { actionProfile } from "./Pages/Profile";
import { actionAddJob } from "./Pages/AddJob";
/// actions

import { loaderDashboard } from "./Pages/Dashboard";
import { loaderJobs } from "./Pages/Jobs";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    errorElement: <Error />,
    loader: loaderDashboard(store),
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: loaderDashboard(store),
      },
      {
        path: "profile",
        element: <Profile />,
        action: actionProfile(store),
      },

      {
        path: "jobs",
        element: <Jobs />,
        loader: loaderJobs(store),
      },
      {
        path: "add-job",
        element: <AddJob />,
        action: actionAddJob(store),
      },
    ],
  },
  {
    path: "/",
    element: <Landing />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    action: actionLogin(store),
  },
  {
    path: "/register",
    element: <Register />,
    action: actionRegister,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
