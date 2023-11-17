import React from "react";

const LoaderElement = () => {
  return (
    <>
      <div className=" overflow-hidden">
        <div className="h-[100dvh] w-[100vw] bg-base-100 flex flex-col justify-center items-center">
          <span className=" loading loading-ring text-secondary font-bold w-14 h-14" />
        </div>
      </div>
    </>
  );
};

export default LoaderElement;
