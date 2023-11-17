import React from "react";

const SubmitBtn = ({ text, name, val }) => {
  return (
    <>
      <div>
        <button
          name={name}
          value={val}
          type="submit"
          className="btn btn-secondary w-full  "
        >
          {text}
        </button>
      </div>
    </>
  );
};

export default SubmitBtn;
