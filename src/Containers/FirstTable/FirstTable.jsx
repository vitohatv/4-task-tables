import { Skeleton, Table } from "antd";
import "./FirstTable.css";

const FirstTable = () => {
  const columns = [
    {
      title: <Skeleton.Input active />,
      dataIndex: "price",
      key: "price",
      render: (text) => <Skeleton active paragraph={{ rows: 0 }} />,
    },
    {
      title: <Skeleton.Input active />,
      dataIndex: "amount",
      key: "amount",
      render: (text) => <Skeleton active paragraph={{ rows: 0 }} />,
    },
    {
      title: <Skeleton.Input active />,
      dataIndex: "total",
      key: "total",
      render: (text) => <Skeleton active paragraph={{ rows: 0 }} />,
    },
  ];

  return (
    <div style={{ maxWidth: 600 }}>
      <Table
        size="small"
        dataSource={[{}, {}, {}, {}, {}, {}, {}]}
        columns={columns}
        pagination={false}
        scroll={{ x: "100%" }}
      />
    </div>
  );
};

export default FirstTable;
