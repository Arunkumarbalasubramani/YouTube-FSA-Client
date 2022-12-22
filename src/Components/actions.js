import axios from "axios";
const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`);
  return data;
};
