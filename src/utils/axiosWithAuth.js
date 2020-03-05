import axios from "axios";

 const axiosWithAuth = () => {
  const token = window.localStorage.getItem("token");

  const instance = axios.create({
    headers: {
      "content-Type": "application/json",
      Authorization:  `Token ${token}`
    }
  });
  return instance;
};

export default axiosWithAuth;
