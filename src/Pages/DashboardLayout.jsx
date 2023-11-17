import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import { Loading, Sidebar, Header } from "../Components";

const DashboardLayout = () => {
  const nav = useNavigation();
  let isPageLoading = nav.state === "loading";
  // console.log(nav);
  return (
    <div>
      {isPageLoading ? (
        <Loading />
      ) : (
        <>
          <main>
            <div className="flex flex-row ">
              <div className="relative">
                <div className="sticky top-0">
                  <Sidebar />
                </div>
              </div>
              <div className="w-full">
                <Header />
                <Outlet />
              </div>
            </div>
          </main>
        </>
      )}
    </div>
  );
};

export default DashboardLayout;
