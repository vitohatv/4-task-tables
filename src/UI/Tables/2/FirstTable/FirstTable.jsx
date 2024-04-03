import { Skeleton, Table } from "antd";
import "./FirstTable.css";

const FirstTable = () => {
  const data = Array.from({ length: 11 }, (_, i) => ({}));
  data[5].space = true;
  const columns = [
    {
      title: (
<<<<<<< HEAD
        <Skeleton.Input size='small' className='sceleton-title-first' active />
=======
        <Skeleton.Input size="small" className="sceleton-title-first" active />
>>>>>>> 25395cbb262599555e3ed464ebe3b2fb598732dc
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
<<<<<<< HEAD
        <Skeleton.Input size='small' className='sceleton-title-second' active />
=======
        <Skeleton.Input size="small" className="sceleton-title-second" active />
>>>>>>> 25395cbb262599555e3ed464ebe3b2fb598732dc
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
<<<<<<< HEAD
      title: (<Skeleton.Input size='small' className='sceleton-title-third' active />),
=======
      title: (
        <Skeleton.Input size="small" className="sceleton-title-third" active />
      ),
>>>>>>> 25395cbb262599555e3ed464ebe3b2fb598732dc
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
<<<<<<< HEAD
    <div style={{ maxWidth: 400 }}>
=======
    <div style={{ maxWidth: 350 }}>
>>>>>>> 25395cbb262599555e3ed464ebe3b2fb598732dc
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
