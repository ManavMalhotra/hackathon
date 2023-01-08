import axios from "axios";

//change this backend api url || TO DO
let baseUrl = "http://localhost:3001/api/login";
// let baseUrl = "http://localhost:5000/api/login";
const loginHandle = async (info) => {
	console.log(info)
  let response = await axios.post(baseUrl, info);
  return response.data;
};

export default loginHandle;
