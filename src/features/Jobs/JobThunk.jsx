import { Navigate } from "react-router-dom";
import { customFetch } from "../../utils/index";
import { isDeleted } from "./JobSlice";
export const deleteJobThunk = async (job, thunkAPI) => {
  try {
    const response = await customFetch.delete(`/jobs/${job.jobId}`, {
      headers: {
        Authorization: `Bearer ${job.token}`,
      },
    });
    return response.data.msg;
  } catch (error) {
    if (error.response.status === 401) {
      // thunkAPI.dispatch(clearStore());
      return thunkAPI.rejectWithValue("Unauthorized! Logging Out...");
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
