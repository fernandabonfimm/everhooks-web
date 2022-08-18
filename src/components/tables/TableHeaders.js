import React, { useState, useEffect } from "react";
import "../../styles/components/tables.css";
import { launchErrorMessage } from "../../services/message/launchMessages";
import moment from "moment";
import { getFirstId, getUuid } from "../../services/routes/apiUuid";
import Alert from 'sweetalert2';

const TableHeaders = () => {
  const [uuidList, setUuidList] = useState([]);
  const [uuidGet, setUuidGet] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      loadData();
    }, 3000); // 300000
    return () => clearInterval(interval);
  }, []);

  const _json = {
    id: uuidGet.uurluuid,
  };

  const loadData = async (data) => {
    try {
      const _result = await getFirstId(_json.id);
      console.log(_result)
      if (_result?.response) {
        setUuidList(
          _result?.data?.sort((a, b) => {
            if (a && b) {
              if (moment(a.createdAt).unix() < moment(b.createdAt).unix()) {
                return 1;
              }
              if (moment(a.createdAt).unix() > moment(b.createdAt).unix()) {
                return -1;
              }
            }
            return 0;
          })
        );
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <>
      <div style={{ overflowX: "auto" }}>
        {" "}
        <table className="table">
          <thead>
            <tr>
              <th className="th">
                <span className="title-table">Host</span>
              </th>
              <th className="th">
                <span className="title-table">Postman Token</span>
              </th>
              <th className="th">
                <span className="title-table">User-Agent</span>
              </th>
              <th className="th">
                <span className="title-table">Content-Type</span>
              </th>
              <th className="th">
                <span className="title-table">Connection</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {uuidList.map((dados, index) => {
              var _index = index + 1;
              return (
                <tr key={index} role="row" className="odd">
                  <td className="td">
                    {" "}
                    <span className="description-table"></span>
                  </td>
                  <td className="td">
                    {" "}
                    <span className="description-table">{dados?.token}</span>
                  </td>
                  <td>
                    {" "}
                    <span className="description-table">{dados?._id} </span>
                  </td>
                  <td className="td">
                    {" "}
                    <span className="description-table"></span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default TableHeaders;
