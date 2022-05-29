import axios from "axios";

const KEY = "AIzaSyAdQdftItFGdXfe9PPjn5AkMeWGSigQzj8";
//We used here capital letter KEY, just to emphesis that it is  "const" value, means we must not change (Becaue we got it from the YoutubAPI)

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet", //These paramets are requirement of youtubeAPi site
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
