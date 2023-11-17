import React from "react";
import { Form, Link, redirect } from "react-router-dom";
import { TextInput, SubmitBtn } from "../Components";
import { customFetch } from "../utils/index";
import { toast } from "react-toastify";
export const actionRegister = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const info = {
    name: `${data["first-name"]} ${data["last-name"]}`,
    email: data.email,
    password: data.password,
  };
  try {
    const response = await customFetch.post("/auth/register", info);
    console.log(response.data);
    toast.success("Successfully registered");
    return redirect("/login");
  } catch (error) {
    const errorMessage = "Please provide valid credentials";
    toast.error(errorMessage);
    return null;
  }
};

const Register = () => {
  return (
    <>
      <div className="bg-main px-4  py-10 min-h-screen flex flex-col justify-center items-center">
        <Form
          method="POST"
          className="w-full max-w-[450px] mx-auto px-5 shadow-lg bg-secodary rounded-xl py-10 border-solid border-t-4 border-secondary"
        >
          <h1 className="text-secondary text-center mb-7 font-bold text-4xl">
            Register
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <TextInput
              name="first-name"
              placeholder="First name"
              type="text"
              label="First name"
              required="required"
            />
            <TextInput
              name="last-name"
              placeholder="Last name"
              type="text"
              label="Last name"
            />
          </div>
          <TextInput
            name="email"
            placeholder="Email"
            type="email"
            label="Email"
            required="required"
          />
          <TextInput
            type="password"
            required="required"
            label="Password"
            name="password"
            placeholder="Password"
          />
          <div className="mt-4 flex flex-col gap-4">
            <SubmitBtn text="Register" />
            <Link className="btn-link text-center text-secondary" to="/login">
              Already a member? Login
            </Link>
            <div className="mt-1 text-center">
              <Link to="/" className="text-secondaryf">
                Back to home
              </Link>
            </div>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Register;
