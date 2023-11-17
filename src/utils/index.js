import axios from "axios";

export const customFetch = axios.create({
  baseURL: "https://jobify-prod.herokuapp.com/api/v1/toolkit",
});
export const optionsStatus = ["all", "pending", "interview", "declined"];
export const optionsSort = ["latest", "oldest", "a-z", "z-a"];
export const optionsType = [
  "all",
  "full-time",
  "part-time",
  "remote",
  "internship",
];
export const paginationBtns = (numPages) => {
  const numArr = Array.from({ length: numPages }, (_, index) => index + 1);
  return numArr;
};
