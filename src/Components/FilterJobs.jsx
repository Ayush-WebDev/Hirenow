import React from "react";
import TextInput from "./TextInput";
import { Form, Link } from "react-router-dom";
import SubmitBtn from "./SubmitBtn";
import SelectInput from "./SelectInput";
import { useLoaderData } from "react-router-dom";
import { optionsSort, optionsStatus, optionsType } from "../utils";
const FilterJobs = () => {
  const {
    params: { search, jobType, status, sort },
  } = useLoaderData();

  return (
    <>
      <div className="p-10 mb-10 bg-base-100 rounded-lg">
        <h1 className="text-3xl mb-3">All Jobs</h1>
        <Form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-end">
          <TextInput
            type="search"
            label="Search"
            name="search"
            defaultVal={search}
            placeholder="Search"
          />
          <SelectInput
            label="Status"
            name="status"
            options={optionsStatus}
            defaultCheck={status}
          />
          <SelectInput
            label="Type"
            name="jobType"
            options={optionsType}
            defaultCheck={jobType}
          />
          <SelectInput
            label="Sort"
            name="sort"
            options={optionsSort}
            defaultCheck={sort}
          />
          <Link to="" className="btn btn-info mb-3">
            Clear all
          </Link>
          <div className="mb-3">
            <SubmitBtn text="Submit" />
          </div>
        </Form>
      </div>
    </>
  );
};

export default FilterJobs;
