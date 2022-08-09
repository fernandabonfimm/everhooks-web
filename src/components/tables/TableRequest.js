import React, {useState} from "react";


const TableRequest = () => {
  
  return (
    <>
      <Table
        columns={columns}
        dataSource={vouchers}
        pagination={false}
        scroll={{ x: 2000, y: 500 }}
        bordered
      />{" "}
    </>
  );
};
export default TableRequest;
