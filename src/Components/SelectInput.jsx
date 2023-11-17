import React from "react";

const SelectInput = ({ name, label, options, defaultCheck }) => {
  return (
    <>
      <div className="w-full form-control">
        <label className="label text-neutral" htmlFor={label}>
          <span className="label-text font-medium">{label}</span>
        </label>
        <select
          defaultValue={defaultCheck}
          className=" select select-bordered select-md w-full mb-3"
          name={name}
          id={label}
        >
          {options.map((option, index) => {
            return (
              <option key={index} value={option}>
                {option}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default SelectInput;
