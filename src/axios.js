import axios from "axios";
const instance = axios.create({
  baseURL: "https://blog-backend-ybaz.onrender.com",
});
export default instance;
