import React from "react";
import ImgError from "../assets/not-found.svg";
import { Link } from "react-router-dom";
const Error = () => {
  return (
    <>
      <div className="w-full h-[100vh] bg-main flex flex-col items-center justify-center gap-5 text-center">
        <div className="max-w-[450px] w-full ">
          <img src={ImgError} alt="not found" className="mb-10" />
          <h2 className="text-3xl text-neutral">Oops, page not found!</h2>
          <Link className="btn btn-link" to="/">
            Back to home
          </Link>
        </div>
      </div>
    </>
  );
};

export default Error;
