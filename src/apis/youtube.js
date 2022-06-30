import axios from "axios";

const KEY = "AIzaSyDTaj7O6ef3_uefrFAwYbv7Lqg6Bdsml6Y";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
