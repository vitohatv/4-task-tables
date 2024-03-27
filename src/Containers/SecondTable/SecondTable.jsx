import { Button, Skeleton, Table, Tag } from 'antd';
import Column from 'antd/es/table/Column';
import { useEffect, useState } from 'react';
import './SecondTable.css';

const SecondTable = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]); 

  useEffect(() => {
    const tableBtcMarket = () => {
      setTimeout(() => {
        const data = [
          {
            key: '1',
            price: -952.5,
            amount: 200,
            total: '$ 200',
            products: [
              { key: '1', nameDeal:'BTC-5APR24',  tags: ['buy'],  amountInTable: 200, limitInTable: '71,567.50',  marketPrice: '71,567.50', },
              { key: '2', nameDeal:'BTC-26APR24', tags: ['sell'], amountInTable: 200, limitInTable: '72,520.00',  marketPrice: '72,520.00', },
            ],
          },
          {
            key: '2',
            price: -947.5,
            amount: 9780,
            total: '$ 9 980',
            products: [
              { key: '3', nameDeal:'BTC-9APR24',  tags: ['buy'],  amountInTable: 9780, limitInTable: '71,497.84',  marketPrice: '71,507.84', },
              { key: '4', nameDeal:'BTC-29APR24', tags: ['sell'], amountInTable: 800, limitInTable: '71,550.00',  marketPrice: '71,560.00', },
            ],
          },
          {
            key: '3',
            price: -927.5,
            amount: 600,
            total: '$ 10 580',
            products: [
              { key: '5', nameDeal:'BTC-4APR24',  tags: ['buy'],  amountInTable: 600, limitInTable: '71,497.84',  marketPrice: '71,497.84', },
              { key: '6', nameDeal:'BTC-17APR24', tags: ['sell'], amountInTable: 200, limitInTable: '71,550.00',  marketPrice: '71,560.00', },
            ],
          },
          {
            key: '4',
            price: -922.5,
            amount: 1420,
            total: '$ 12 000',
            products: [
              { key: '7', nameDeal:'BTC-6APR24',  tags: ['buy'],  amountInTable: 600, limitInTable: '71,497.84',  marketPrice: '71,497.84', },
              { key: '8', nameDeal:'BTC-16APR24', tags: ['sell'], amountInTable: 200, limitInTable: '71,550.00',  marketPrice: '71,560.00', },
            ],
          },
          {
            key: '5',
            price: -920,
            amount: 6600,
            total: '$ 18 600',
            products: [
              { key: '9', nameDeal:'BTC-8APR24',  tags: ['buy'],  amountInTable: 600, limitInTable: '71,497.84',  marketPrice: '71,497.84', },
              { key: '10', nameDeal:'BTC-21APR24', tags: ['sell'], amountInTable: 200, limitInTable: '71,550.00',  marketPrice: '71,560.00', },
            ],
          },
          {
            key: '6',
            price: -917.5,
            amount: 14000,
            total: '$ 32 600',
            products: [
              { key: '11', nameDeal:'BTC-8APR24',  tags: ['buy'],  amountInTable: 600, limitInTable: '71,497.84',  marketPrice: '71,497.84', },
              { key: '12', nameDeal:'BTC-20APR24', tags: ['sell'], amountInTable: 200, limitInTable: '71,550.00',  marketPrice: '71,560.00', },
            ]
          }
        ];
        setData(data);
        setLoading(false); 
      }, 2500);
    };
    tableBtcMarket();
  },[])


  const expandedRowRender = (record) => (
    <div>
      <Table dataSource={record.products} pagination={false} >
      <Column dataIndex="nameDeal" key="nameDeal" />
        <Column
            title="Side"
            dataIndex="tags"
            key="tags"
            
            render={(tags) => (
              <div>
                {tags.map((tag) => (
                  <Tag color={tag === 'sell' ? 'volcano' : 'green'} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                ))}
              </div>
            )}
        />
          
        <Column title="Amount" dataIndex="amountInTable" key="amountInTable" />
        <Column title="Limit" dataIndex="limitInTable" key="limitInTable"    />
        <Column title="Market" dataIndex="marketPrice" key="marketPrice"     />
      </Table>
        <Button type="primary" block className='button-inner-table'>
          Trade
        </Button>
    </div>
  );

return (
  <div>
    <Table 
      dataSource={loading ? [{}] : data} 
      expandable={{ expandedRowRender }} 
      pagination={false}
      loading={loading}
      scroll={{x: '100%'}}
    >

      <Column 
        title={loading ? <Skeleton.Input active /> : "Price"}  
        dataIndex="price"   
        key="price"    
        render={text => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text} 
      />
      <Column 
        title={loading ? <Skeleton.Input active /> : "Amount"} 
        dataIndex="amount" 
        key="amount"    
        render={text => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text} 
      />
      <Column 
        title={loading ? <Skeleton.Input active /> : "Total"}  
        dataIndex="total"   
        key="total"    
        render={text => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text} 
      />
    </Table>
  </div>
  )
}

export default SecondTable;