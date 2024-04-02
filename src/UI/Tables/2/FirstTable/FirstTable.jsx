import { Skeleton, Table } from 'antd';
import './FirstTable.css';

const FirstTable = () => {
  const data = Array.from({length: 20}, (_, i) => ({}));
  data[9].space = true;
  const columns = [
    {
      title: <Skeleton.Input size='small' className='sceleton-title-first' active />,
      dataIndex: "price",
      key: "price",
      render: (text, record, index) => {
        if (record.space) {
          return null;
        } else {
          return <Skeleton className='sceleton-text-first' active paragraph={{ rows: 0 }} />;
        }
      },
    },
    {
      title: <Skeleton.Input size='small' className='sceleton-title-second' active />,
      dataIndex: "amount",
      key: "amount",
      render: (text, record, index) => {
        if (record.space) {
          return null;
        } else {
          return <Skeleton className='sceleton-text-second' active paragraph={{ rows: 0 }} />;
        }
      },
    },
    {
      title: <Skeleton.Input 
      size='small' 
      className='sceleton-title-third' 
      active         
      />,
      dataIndex: "total",
      key: "total",
      render: (text, record, index) => {
        if (record.space) {
          return null;
        } else {
          return <Skeleton className='sceleton-text-third' active paragraph={{ rows: 0 }} />;
        }
      },
    },
  ];


  return (
    <div className='first-table-container'>
      <Table
        className='table-inner'
        dataSource={data}
        columns={columns}
        pagination={false} 
      />
    </div>
  );
};

export default FirstTable;