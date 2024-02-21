import axios from "axios";

const instance = axios.create({
    // baseURL: "http://13.200.74.2/",
    baseURL: "https://qdp72jc1-8080.inc1.devtunnels.ms/", //The API {Cloud Funtion}
    // baseURL: "https://qdp72jc1-3001.inc1.devtunnels.ms/"

});

export default instance;
