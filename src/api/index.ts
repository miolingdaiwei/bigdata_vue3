import axios, { type AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
const request = axios.create({
  baseURL: "/api",
  timeout: 10000,
});
request.defaults.withCredentials = true;
request.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
request.defaults.headers.post["Content-Type"] = "application/json";

request.interceptors.request.use((req) => {
  return req;
});

request.interceptors.response.use((res) => {
  if (typeof res.data !== "object") {
    ElMessage("服务端异常");
    return Promise.reject(res);
  }
  if (res.status != 200) {
    if (res.statusText) {
      ElMessage.error(res.data.message);
    }
    return Promise.reject(res);
  }
  console.log(res, "res");

  return res;
});
export default async <T = any>(config: AxiosRequestConfig) => {
  const res = await request(config);
  // config就是url，method等的那个对象
  return res.data as T;
};
