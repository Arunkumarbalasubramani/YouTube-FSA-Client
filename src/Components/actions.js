import axios from "axios";
const BASE_URL = "https://youtube.googleapis.com/youtube/v3";

export const getAllVideos = async () => {
  const { data } = await axios.get(
    `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=IN&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  return data;
};
export const getRecommendedVideos = async (videoId) => {
  const { data } = await axios.get(
    `${BASE_URL}/search?part=snippet&relatedToVideoId=${videoId}&type=video&&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  return data;
};

export const getChannelIcon = async (channelId) => {
  const { data } = await axios.get(
    `${BASE_URL}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  return data;
};
export const getVideoDetails = async (videoId) => {
  const { data } = await axios.get(
    `${BASE_URL}/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );

  return data;
};

export const searchVideos = async (searchTerm) => {
  const { data } = await axios.get(
    `${BASE_URL}/search?part=snippet&maxResults=25&q=${searchTerm}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`
  );
  return data;
};

export const getChannelById = async (channelId) => {
  const { data } =
    await axios.get(`${BASE_URL}/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${channelId}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}
   `);

  return data;
};

export const getChannelSection = async (channelId) => {
  const { data } = await axios.get(
    ` ${BASE_URL}/search?channelId=${channelId}&part=snippet%2Cid&order=date&maxResults=25&key=${process.env.REACT_APP_YOUTUBE_API_KEY}
    `
  );
  return data;
};
