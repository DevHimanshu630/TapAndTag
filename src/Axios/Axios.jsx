import axios from "axios";

const instance = axios.create({
  // baseURL: "http://13.200.74.2/",
  //  baseURL: "https://tapandtag.onrender.com/",//The API {Cloud Funtion}
  baseURL: "https://qdp72jc1-8080.inc1.devtunnels.ms/",
  // baseURL: "https://j3hg2gqz-8080.inc1.devtunnels.ms/"
  // baseURL: 'http://localhost:8080'
  // baseURL: 'https://ekdantinternational.in/'
  // baseURL: 'ec2-3-110-32-74.ap-south-1.compute.amazonaws.com'
});

export default instance;
  