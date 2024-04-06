import { DownOutlined, RightOutlined } from '@ant-design/icons';
import { Skeleton, Table } from 'antd';
import './SecondTable.css';


const SecondTable = () => {
  const expandedRowRender = () => {
    const skeletonColumns = [
      {
        title: <Skeleton.Input className='input-deals' size='small' active />,
        dataIndex: 'nameDeal',
        key: 'nameDeal',
        align: "center",
        render: () => <Skeleton.Input className='name-deals-col' size='small' active paragraph={{ rows: 0 }} />
      },
      {
        title: <Skeleton.Input className='input-tags' size='small' style={{ width: '50px' }} active />,
        dataIndex: 'side',
        key: 'side',
        align: "center",
        render: () => <Skeleton.Button active={true} size="small" />
      },
      {
        title: <Skeleton.Input className='input-amount' size='small' active />,
        dataIndex: 'amount',
        key: 'amount',
        align: "center",
        render: () => <Skeleton.Button active={true} size="small" />
      },
      {
        title: <Skeleton.Input className='input-limit' size='small' active />,
        dataIndex: 'limit',
        key: 'limit',
        align: "center",
        render: () => <Skeleton.Button active={true} style={{width: '70px'}} size="small" />
      },
      {
        title: <Skeleton.Input className='input-market' size='small' active />,
        dataIndex: 'market',
        key: 'market',
        align: "center",
        render: () => <Skeleton.Button active={true} style={{width: '70px'}} size="small" />
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
      title: <Skeleton.Input className='column-table' size='small' active />,
      dataIndex: 'price',
      key: 'price'
    },
    {
      title: <Skeleton.Input className='column-table' size='small' active />,
      dataIndex: 'amount',
      key: 'amount'
    },
    {
      title: <Skeleton.Input className='column-table' size='small' active />,
      dataIndex: 'total',
      key: 'total'
    },
  ]

  const data = [];
  for (let i = 0; i < 3; i++) {
    data.push({
      key: i.toString(),
      price:  <Skeleton.Button className='table-elem' active paragraph={{ rows: 0 }}  />,
      amount: <Skeleton.Button className='table-elem' active paragraph={{ rows: 0 }}  />,
      total:  <Skeleton.Button className='table-elem' active paragraph={{ rows: 0 }}  />
    });
  }

  return (
    <div className='table-second' style={{ maxWidth: 850 }}>
      <Table
        columns={columns}
        expandable={{expandedRowRender, 
        defaultExpandedRowKeys: '0',
        expandIcon:({ expanded, onExpand, record }) => (
            <div className='arrow-table' onClick={e => onExpand(record, e)}>
              {expanded ? <DownOutlined /> : <RightOutlined />}
            </div>
            )
          }}
        dataSource={data}
        pagination={false}
        scroll={{ x: "100%" }}
      />
    </div>
  );
};
export default SecondTable;