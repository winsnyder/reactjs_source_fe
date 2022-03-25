import { axiosClient } from "./axiosClient";

export const postApi = {
  async getList(params, token) {
    var qs = require("qs");
    const response = await axiosClient.get("v1/api/posts", {
      params: {
        ...params,
      },
      paramsSerializer: (params) => {
        //ví dụ với trường hợp size=[1,2] => &size=1&size=2
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
      headers: {
        "btn-access-token": token,
      },
    });
    return response;
  },

  get(id, token) {
    const url = `v1/api/post/${id}`;
    return axiosClient.get(url, {
      headers: {
        "btn-access-token": token,
      },
    });
  },

  add(data, token) {
    const url = `v1/api/post`;
    return axiosClient.post(url, data, {
      headers: {
        "btn-access-token": token,
        "Content-Type": "multipart/form-data",
      },
    });
  },

  remove(id, token) {
    const url = `v1/api/post/${id}`;
    return axiosClient.delete(url, {
      headers: {
        "btn-access-token": token,
      },
    });
  },
};
