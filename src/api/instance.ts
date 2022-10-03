import axios, { AxiosError } from "axios";

const instance = axios.create({
  baseURL: "https://api.data.gov.sg/v1",
  timeout: 1000 * 10
});

instance.interceptors.response.use(
  res => res,
  (err: AxiosError) => {
    //Add toast here
    console.error(err);
    return Promise.reject(err);
  }
);

export default instance;