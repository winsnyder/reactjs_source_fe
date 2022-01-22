import { axiosClient } from "./axiosClient";

export const userApi = {
  async getList(params) {
    var qs = require("qs");
    const response = await axiosClient.get("v1/api/users", {
      params: {
        ...params,
      },
      paramsSerializer: (params) => {
        //ví dụ với trường hợp size=[1,2] => &size=1&size=2
        return qs.stringify(params, { arrayFormat: "repeat" });
      },
    });
    return response;
  },

  get(id) {
    const url = `v1/api/user/${id}`;
    return axiosClient.get(url);
  },

  add(data) {
    const url = `v1/api/user`;
    return axiosClient.post(url, data);
  },

  update(id, data) {
    const url = `v1/api/user/${id}`;
    return axiosClient.put(url, data);
  },

  remove(id) {
    const url = `v1/api/user/${id}`;
    return axiosClient.delete(url);
  },
};
