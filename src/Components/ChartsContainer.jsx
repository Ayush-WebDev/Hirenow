import React, { useState } from "react";
import AreaChartComponent from "./AreaChart";
import { useLoaderData } from "react-router-dom";
import BarChartComponent from "./BarChart";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(false);
  const {
    data: { monthlyApplications: data },
  } = useLoaderData();

  return (
    <div className="wrapper-section">
      <div className="flex flex-col items-center justify-center pt-10">
        <h3 className="text-3xl text-gray-600">Monthly applications</h3>
        <button
          className="mt-4 text-2xl text-secondary"
          onClick={() => {
            setBarChart(!barChart);
          }}
        >
          {barChart ? "Bar Chart" : "Area Chart"}
        </button>
        <div>
          {!barChart ? (
            <AreaChartComponent data={data} />
          ) : (
            <BarChartComponent data={data} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ChartsContainer;
