import React from "react";
import { Form, Link } from "react-router-dom";
import { TextInput, SelectInput, SubmitBtn } from "../Components";
import { optionsStatus, optionsType } from "../utils";

const AddJobNew = () => {
  return (
    <>
      <Form
        method="POST"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 items-end gap-5  rounded-md bg-base-100 p-5"
      >
        <h1 className="text-4xl col-span-1 sm:col-span-2 lg:col-span-3 font-medium">
          Add new job
        </h1>
        <TextInput name="position" label="Position" required="required" />
        <TextInput name="company" label="Company" required="required" />
        <TextInput
          name="jobLocation"
          label="Job Location"
          required="required"
        />
        <SelectInput name="status" label="Status" options={optionsStatus} />
        <SelectInput name="jobType" label="Job Type" options={optionsType} />
        <div className="grid grid-cols-2 gap-3 mb-3">
          <Link className="btn btn-info" to="">
            Clear
          </Link>
          <SubmitBtn name="formName" val="addJob" text="Submit" />
        </div>
      </Form>
    </>
  );
};

export default AddJobNew;
