import React, { useEffect, useState } from "react";
import { userApi } from "../../services/user.api";

export default function Card() {
  const [data, setData] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        let response = await userApi.getList({});
        setData(response.data.results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  let elements = [];
  data.map((item, idx) => {
    elements.push(<p key={idx}>{item.username}</p>);
  });

  return <>{elements}</>;
}
