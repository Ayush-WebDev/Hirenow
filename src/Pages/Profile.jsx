import React from "react";
import { Form } from "react-router-dom";
import { TextInput, SubmitBtn } from "../Components";
import { useSelector } from "react-redux";
import { customFetch } from "../utils";
import { toast } from "react-toastify";
import { updateUser } from "../features/User/UserSlice";

export const actionProfile =
  (store) =>
  async ({ request }) => {
    const formData = await request.formData();
    const { token } = store.getState().userState.user;
    const data = Object.fromEntries(formData);
    try {
      const response = await customFetch.patch("/auth/updateUser", data, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      store.dispatch(updateUser(response.data.user));
      toast.success("user updated");
      return null;
    } catch (error) {
      const errorMessage = error?.response?.data?.msg;
      toast.error(errorMessage);
      return null;
    }
  };

const Profile = () => {
  const { email, lastName, location, name } = useSelector(
    (store) => store.userState.user
  );

  return (
    <>
      <div className="bg-main dashboard-page min-h-screen">
        <Form
          method="POST"
          className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-end rounded-lg bg-white px-10 py-10 max-w-[1440px] mx-auto"
        >
          <h2 className="text-3xl sm:col-span-3 font-semibold text-neutral capitalize">
            profile
          </h2>
          <TextInput
            label="Name"
            placeholder="Name"
            name="name"
            type="text"
            required="required"
            defaultVal={name}
          />
          <TextInput
            label="Last name"
            placeholder="Last name"
            name="lastName"
            type="text"
            required="required"
            defaultVal={lastName}
          />
          <TextInput
            label="Email"
            placeholder="Email"
            required="required"
            name="email"
            type="email"
            defaultVal={email}
            disabled="disabled"
            readonly="readonly"
          />
          <TextInput
            label="Location"
            placeholder="Location"
            required="required"
            name="location"
            type="text"
            defaultVal={location}
          />
          <div className="mb-3">
            <SubmitBtn text="save changes" />
          </div>
        </Form>
      </div>
    </>
  );
};

export default Profile;
