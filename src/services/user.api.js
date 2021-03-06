import { axiosClient } from "./axiosClient";

export const userApi = {
  async getList(params, token) {
    var qs = require("qs");
    const response = await axiosClient.get("v1/api/users", {
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

  get(id) {
    const url = `v1/api/user/${id}`;
    return axiosClient.get(url);
  },

  add(data, token) {
    const url = `v1/api/user`;
    return axiosClient.post(url, data, {
      headers: {
        "btn-access-token": token
      }
    });
  },

  update(id, data) {
    const url = `v1/api/user/${id}`;
    return axiosClient.put(url, data);
  },

  remove(id, token) {
    const url = `v1/api/user/${id}`;
    return axiosClient.delete(url, {
      headers: {
        "btn-access-token": token,
      },
    });
  },
};
