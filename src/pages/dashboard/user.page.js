import React, { useEffect, useReducer } from "react";
import LayoutWrapper from "./wrapper";
import { Table, Tag } from "antd";
import { userApi } from "../../services/user.api";

/*Define Column For Table User*/
const COLUMN_USER = [
  {
    title: "#",
    dataIndex: "index",
    sorter: true,
    width: "5%",
  },
  {
    title: "Tên tài khoản",
    dataIndex: "username",
    width: "20%",
  },
  {
    title: "Trạng thái",
    dataIndex: "is_active",
    width: "10%",
    render: (tag) => <Tag color="red">{tag ? "Active" : "Deactive"}</Tag>,
  },
  {
    title: "Ngày tham gia hệ thống",
    dataIndex: "created_at",
    width: "15%",
  },
  {
    title: "Tùy chọn chứ năng",
    width: "20%",
    render: () => <p>thang.buingoc</p>,
  },
];

/*Using Reducer for management state*/
const dataFetchReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_INIT":
      return {
        ...state,
        loading: true,
      };
    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "FETCH_FAILURE":
      return {
        ...state,
        loading: false,
      };
    default:
      throw new Error();
  }
};

export default function UserPage() {
  const [state, dispatch] = useReducer(dataFetchReducer, {
    data: [],
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  useEffect(() => {
    getData({});
  }, []);

  const getData = async (params) => {
    dispatch({ type: "FETCH_INIT" });
    try {
      let response = await userApi.getList(params);
      console.log(response);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data.results });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE" });
    }
  };

  // handle change table
  const handleTableChange = (pagination, filters, sorter) => {
    getData({
      sortField: sorter.field,
      sortOrder: sorter.order,
      pagination,
      ...filters,
    });
  };

  console.log(state.data);

  // Fill data into table
  let dataSource = [];
  state.data.map((item, idx) => {
    dataSource.push({
      key: idx,
      index: idx + 1,
      username: item.username,
      created_at: item.created_at,
      is_active: item.is_active,
    });
  });

  return (
    <LayoutWrapper>
        <Table
          columns={COLUMN_USER}
          dataSource={dataSource}
          pagination={state.pagination}
          loading={state.loading}
          onChange={handleTableChange}
        />
    </LayoutWrapper>
  );
}
