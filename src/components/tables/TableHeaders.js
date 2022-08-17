import React, { useState, useEffect } from "react";
import "../../styles/components/tables.css";
import { Tag } from "antd";
import {
  launchErrorMessage,
  launchSuccessMessage,
} from "../../services/message/launchMessages";
import moment from "moment";

const TableHeaders = () => {
  const [uuidList, setUuidList] = useState([]);
  const loadData = async () => {
    try {
      const _result = await getUuid();
      if (_result?.response) {
        await launchErrorMessage(_result?.response?.data);
      } else {
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
      await launchErrorMessage(JSON.stringify(error));
    }
  };

  useEffect(() => {
    loadData();
  }, []);

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
                    <span className="description-table">everhooks.site</span>
                  </td>
                  <td className="td">
                    {" "}
                    <span className="description-table">
                      92a8b6ad-2f91-4c7c-84f6-8f05d0d1cec1
                    </span>
                  </td>
                  <td className="td">
                    {" "}
                    <span className="description-table">
                      PostmanRuntime/7.29.2
                    </span>
                  </td>
                  <td>
                    {" "}
                    <span className="description-table">application/json</span>
                  </td>
                  <td className="td">
                    {" "}
                    <span className="description-table">close</span>
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
