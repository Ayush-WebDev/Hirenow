import React from "react";
import { Form, Link, useNavigate } from "react-router-dom";
import { TextInput, SelectInput, SubmitBtn } from "../Components";
import { optionsStatus, optionsType } from "../utils";
import { clearValues } from "../features/Jobs/JobSlice";
import { useDispatch } from "react-redux";
const EditJob = ({ position, company, jobLocation, status, jobType }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <>
      <h2 className="text-4xl text-neutral">Edit Job</h2>
      <Form method="POST" className="grid grid-cols-3 items-end gap-5">
        <TextInput
          name="position"
          label="Position"
          required="required"
          defaultVal={position}
        />
        <TextInput
          name="company"
          label="Company"
          required="required"
          defaultVal={company}
        />
        <TextInput
          name="jobLocation"
          label="Job Position"
          required="required"
          defaultVal={jobLocation}
        />
        <SelectInput
          name="status"
          label="Status"
          options={optionsStatus}
          defaultCheck={status}
        />
        <SelectInput
          name="jobType"
          label="Job Type"
          options={optionsType}
          defaultCheck={jobType}
        />
        <div className="grid grid-cols-2 gap-3 mb-3">
          <Link
            className="btn btn-info"
            onClick={() => {
              dispatch(clearValues());
            }}
          >
            Clear
          </Link>
          <SubmitBtn text="Submit" name="formName" val="editJob" />
        </div>
      </Form>
    </>
  );
};

export default EditJob;
