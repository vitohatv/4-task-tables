import { Skeleton, Table } from 'antd';
import './SecondTable.css';

const SecondTable = () => {
  const expandedRowRender = () => {
    const skeletonColumns = [
      {
        title: <Skeleton.Input className='input-deals' size='small' active />,
        dataIndex: 'nameDeal',
        key: 'nameDeal',
        render: () => <Skeleton className='name-deals-col' active paragraph={{ rows: 0 }} />
      },
      {
        title: <Skeleton.Input className='input-tags' size='small' style={{ width: '50px' }} active />,
        dataIndex: 'side',
        key: 'side',
        render: () => <Skeleton className='side-tags-col' active paragraph={{ rows: 0 }} />
      },
      {
        title: <Skeleton.Input className='input-amount' size='small' active />,
        dataIndex: 'amount',
        key: 'amount',
        render: () => <Skeleton className='amount-col' active paragraph={{ rows: 0 }} />
      },
      {
        title: <Skeleton.Input className='input-limit' size='small' active />,
        dataIndex: 'limit',
        key: 'limit',
        render: () => <Skeleton className='limit-col' active paragraph={{ rows: 0 }} />
      },
      {
        title: <Skeleton.Input className='input-market' size='small' active />,
        dataIndex: 'market',
        key: 'market',
        render: () => <Skeleton className='market-col' active paragraph={{ rows: 0 }} />
      }
    ];

    return <Table 
    columns={skeletonColumns} 
    dataSource={[{},{}]} 
    pagination={false}
    className='table-inner-market'
    />;
  };

  const columns = [
    {
      title: <Skeleton.Input className='cl' size='small' active />,
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: <Skeleton.Input className='cl' size='small' active />,
      dataIndex: 'amount',
      key: 'amount',
    },
    {
      title: <Skeleton.Input className='cl' size='small' active />,
      dataIndex: 'total',
      key: 'total',
    },
  ]

  const data = [];
  for (let i = 0; i < 3; i++) {
    data.push({
      key: i.toString(),
      price: <Skeleton className='table-elem' active paragraph={{ rows: 0 }} />,
      amount: <Skeleton className='table-elem' active paragraph={{ rows: 0 }} />,
      total: <Skeleton  className='table-elem' active paragraph={{ rows: 0 }} />
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