import axios from "axios";

export default axios.create({
  baseURL: "https://move-be.azurewebsites.net/api",
});
