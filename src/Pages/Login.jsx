import React from "react";
import { Form, Link, redirect, useNavigate } from "react-router-dom";
import { SubmitBtn, TextInput } from "../Components";
import { customFetch } from "../utils";
import { loginUser } from "../features/User/UserSlice";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
export const actionLogin =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.post("/auth/login", data);
      console.log(response.data);
      toast.success("Logged in successfully");
      store.dispatch(loginUser(response.data));
      return redirect("/dashboard");
    } catch (error) {
      const errorMessage =
        error?.response?.data?.msg || "Please check your credentials";
      toast.error(errorMessage);
      return null;
    }
  };

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleDemoLogin = async () => {
    const data = {
      email: "testUser@test.com",
      password: "secret",
    };
    try {
      const response = await customFetch.post("/auth/login", data);
      // console.log(response.data);
      dispatch(
        loginUser({
          user: response.data.user,
        })
      );
      toast.success("Welcome back test user");
      navigate("/dashboard");
    } catch (error) {
      // console.log(error);
      const errorMessage =
        error.response.data.msg || "There was an error try again";
      toast.error(errorMessage);
    }
  };
  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center ">
        <Form
          method="POST"
          className="max-w-[450px] w-full mx-auto px-5 py-10 shadow-lg rounded-xl border-solid border-t-4 border-accent"
        >
          <h1 className="text-4xl font-bold text-center text-secondary mb-7">
            Login
          </h1>
          <TextInput
            type="email"
            required="required"
            label="Email"
            name="email"
            placeholder="Email"
          />
          <TextInput
            type="password"
            required="required"
            label="Password"
            name="password"
            placeholder="Password"
          />
          <div className="mt-4 flex flex-col gap-4 text-center">
            <SubmitBtn text="Login" />
            <button
              className="btn btn-accent"
              type="button"
              onClick={handleDemoLogin}
            >
              Demo login
            </button>
            <Link to="/register" className="btn-link  text-secondary">
              Not a member? Register
            </Link>
            <Link to="/" className=" text-secondary">
              Go back to home
            </Link>
          </div>
        </Form>
      </div>
    </>
  );
};

export default Login;
