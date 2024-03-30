import axios from "axios";

const instance = axios.create({
  // baseURL: "http://13.200.74.2/",
   baseURL: "https://tapandtag.onrender.com/", //The API {Cloud Funtion}
  //  baseURL: "https://qdp72jc1-8080.inc1.devtunnels.ms/",
  // baseURL: "https://j3hg2gqz-8080.inc1.devtunnels.ms/"
  // baseURL: "http://localhost:8080"
  
});

export default instance;
