import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table, Pagination } from "react-bootstrap";
import "../Styles/Style.css";

const Main = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const headers = {
    Authorization: "Bearer my-auth-token",
    "X-CoinAPI-Key": "788749A6-71D1-4484-8E9A-82DD1C45F439",
    "Retry-After": 3600,
  };

  useEffect(() => {
    axios
      .get("https://rest.coinapi.io/v1/exchanges", { headers })
      .then((response) => {
        console.log("Status: ", response.status);
        console.log("Data: ", response.data);
        setPosts(response.data);
        setLoading(true);
      })
      .catch((error) => {
        console.error("Something went wrong!", error);
      });
  }, []);

  return (
    <>
      {loading &&
        posts.map((value, index) => (
          <>
            <Table
              className="my-auto table"
              responsive
              bordered
              striped
              hover
              condensed
            >
              <thead>
                <tr className="setWidth">
                  <th className="col-md-1 col-sm-1"></th>
                  <th className="col-md-2 col-sm-2">Name</th>
                  <th className="col-md-2 col-sm-2">Last Price</th>
                  <th className="col-md-2 col-sm-2">24h change</th>
                  <th className="col-md-2 col-sm-2">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr key={index}>
                  <td>{value.posts}</td>
                  <td>{value.exchange_id}</td>
                  <td>{value.volume_1hrs_usd}</td>
                  <td>{value.volume_1day_usd}</td>
                  <td>{value.data_start}</td>
                </tr>
              </tbody>
            </Table>
          </>
        ))}
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item active>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </>
  );
};

export default Main;
