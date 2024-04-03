import { Skeleton, Table } from "antd";
import "./FirstTable.css";

const FirstTable = () => {
  const data = Array.from({ length: 11 }, (_, i) => ({}));
  data[5].space = true;
  const columns = [
    {
      title: (
        <Skeleton.Input size='small' className='sceleton-title-first' active />
      ),
      dataIndex: "price",
      key: "price",
      align: "left",
      render: (text, record, index) => {
        if (record.space) {
          return null;
        } else {
          return <Skeleton.Button active={true} size="small" />;
        }
      },
    },
    {
      title: (
        <Skeleton.Input size='small' className='sceleton-title-second' active />
      ),
      dataIndex: "amount",
      key: "amount",
      align: "center",
      render: (text, record, index) => {
        if (record.space) {
          return null;
        } else {
          return <Skeleton.Button active={true} size="small" />;
        }
      },
    },
    {
      title: (<Skeleton.Input size='small' className='sceleton-title-third' active />),
      dataIndex: "total",
      key: "total",
      align: "right",
      render: (text, record, index) => {
        if (record.space) {
          return null;
        } else {
          return <Skeleton.Button active={true} size="small" />;
        }
      },
    },
  ];

  return (
    <div style={{ maxWidth: 400 }}>
      <Table
        scroll={{ x: "100%", y: "900px" }}
        dataSource={data}
        columns={columns}
        pagination={false}
        size="small"
      />
    </div>
  );
};

export default FirstTable;
