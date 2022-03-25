import { axiosClient } from "./axiosClient";

export const contactApi = {
  async getList(params, token) {
    var qs = require("qs");
    const response = await axiosClient.get("v1/api/contacts", {
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

  add(data) {
    const url = `v1/api/contact`;
    return axiosClient.post(url, data);
  },

  remove(id, token) {
    const url = `v1/api/contact/${id}`;
    return axiosClient.delete(url, {
      headers: {
        "btn-access-token": token,
      },
    });
  },
};
