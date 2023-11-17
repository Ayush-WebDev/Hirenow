import React, { useState } from "react";

const TextInput = ({
  label,
  name,
  defaultVal,
  required,
  placeholder,
  value,
  type,
  readonly,
  disabled,
}) => {
  return (
    <>
      <div className="w-full form-control">
        <label htmlFor={label} className="label">
          <span className=" label-text font-medium">{label}</span>
        </label>
        <input
          type={type}
          name={name}
          id={label}
          defaultValue={defaultVal}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          readOnly={readonly}
          className="input mb-3 input-bordered font-medium input-md w-full "
        />
      </div>
    </>
  );
};

export default TextInput;
