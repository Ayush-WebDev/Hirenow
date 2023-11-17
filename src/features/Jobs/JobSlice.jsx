import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { deleteJobThunk } from "./JobThunk";
import { toast } from "react-toastify";
const defaultState = {
  jobVal: "",
  token: "",
  jobDeleted: false,
  editJob: false,
};

///// When we use the createAsyncThunk for the actions we need to add the extra reducers property and it passes the promise and we can resolve the promise with the addCase

export const deleteJob = createAsyncThunk("job/deletejob", deleteJobThunk);

const jobSlice = createSlice({
  name: "job",
  initialState: defaultState,
  reducers: {
    editJobState: (state) => {
      state.editJob = true;
    },
    editJobVal: (state, action) => {
      state.jobVal = action.payload;
    },
    clearValues: (state) => {
      state.jobVal = "";
      state.editJob = false;
    },
    isReset: (state) => {
      state.jobDeleted = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteJob.fulfilled, (state, { payload }) => {
        toast.success(payload);
        state.jobDeleted = true;
      })
      .addCase(deleteJob.rejected, (state, { payload }) => {
        // console.log(payload);
        toast.error(payload);
      });
  },
});

export const { editJobState, editJobVal, clearValues, isDeleted, isReset } =
  jobSlice.actions;

export default jobSlice.reducer;
