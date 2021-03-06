import React, { useEffect, useReducer } from "react";
import { useNavigate } from "react-router-dom";
import LayoutWrapper from "../wrapper";
import { Button, Table, Tag } from "antd";
import { EditOutlined } from "@ant-design/icons";
import { userApi } from "../../../services/user.api";
import { UserDeleteModal, UserActiveModal } from "./user.modal";
import BaseContext from "../../../hooks/context";

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
    title: "Hộp thư thoại",
    dataIndex: "email",
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
    render: (row) => (
      <>
        <UserDeleteModal id={row.id} name={row.username} />
        <Button style={{ marginRight: 10 }} icon={<EditOutlined />} />
        {/* <Button icon={<DashOutlined />} /> */}
        <UserActiveModal />
      </>
    ),
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
  const baseCtx = React.useContext(BaseContext);
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(dataFetchReducer, {
    data: [],
    loading: false,
    pagination: {
      current: 1,
      pageSize: 10,
    },
  });

  const getData = async (params, token) => {
    dispatch({ type: "FETCH_INIT" });
    try {
      let response = await userApi.getList(params, token);
      dispatch({ type: "FETCH_SUCCESS", payload: response.data.results });
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE" });
    }
  };

  // handle change table
  const handleTableChange = (pagination, filters, sorter) => {
    const token = sessionStorage.getItem("token");
    getData(
      {
        sortField: sorter.field,
        sortOrder: sorter.order,
        pagination,
        ...filters,
      },
      token
    );
  };

  // Fill data into table
  let dataSource = [];
  state.data.map((item, idx) => {
    dataSource.push({
      key: idx,
      index: idx + 1,
      id: item.id,
      email: "default@gmail.com",
      username: item.username,
      created_at: item.created_at,
      is_active: item.is_active,
    });
  });

  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
    getData({}, token);
  }, [baseCtx.reload]);

  return (
    <LayoutWrapper>
      <Button
        type="primary"
        onClick={() => navigate("/user/create")}
        style={{ marginBottom: 15, borderRadius: 5 }}
      >
        Thêm mới tài khoản
      </Button>
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
