import { Skeleton, Table } from 'antd';
import './SecondTable.css';

const SecondTable = () => {
  const expandedRowRender = () => {
    const skeletonColumns = [
      {
        title: <Skeleton.Input active />,
        dataIndex: 'nameDeal',
        key: 'nameDeal',
        render: () => <Skeleton active paragraph={{ rows: 0, width:'300px' }} />
      },
      {
        title: <Skeleton.Input active />,
        dataIndex: 'side',
        key: 'side',
        render: () => <Skeleton active paragraph={{ rows: 0 }} />
      },
      {
        title: <Skeleton.Input active />,
        dataIndex: 'amount',
        key: 'amount',
        render: () => <Skeleton active paragraph={{ rows: 0 }} />
      },
      {
        title: <Skeleton.Input active />,
        dataIndex: 'limit',
        key: 'limit',
        render: () => <Skeleton active paragraph={{ rows: 0 }} />
      },
      {
        title: <Skeleton.Input active />,
        dataIndex: 'market',
        key: 'market',
        render: () => <Skeleton active paragraph={{ rows: 0 }} />
      }
    ];

    return <Table 
    columns={skeletonColumns} 
    dataSource={[{},{}]} 
    pagination={false} 
    />;
  };

  const columns = [
    {
      title: <Skeleton.Input active />,
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: <Skeleton.Input active />,
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: <Skeleton.Input active />,
      dataIndex: 'total',
      key: 'total',
    },
  ]

  const data = [];
  for (let i = 0; i < 3; i++) {
    data.push({
      key: i.toString(),
      price: <Skeleton active paragraph={{ rows: 0 }} />,
      amount: <Skeleton active paragraph={{ rows: 0 }} />,
      total: <Skeleton active paragraph={{ rows: 0 }} />
    });
  }

  return (
    <div className='table-second'>
      <Table
        columns={columns}
        expandable={{expandedRowRender}}
        dataSource={data}
        pagination={false}
        scroll={{ x: "100%" }}
      />
    </div>
  );
};

export default SecondTable;