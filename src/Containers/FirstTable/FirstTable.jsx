import { Skeleton, Table } from 'antd';
import { useEffect, useState } from 'react';
import './FirstTable.css';

const FirstTable = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const tableData = () => {
            setTimeout(() => {
                setData([
                    {
                      key: '1',
                      price: 71612.5,
                      amount: 6000,
                      total: 175660
                    },
                    {
                      key: '2',
                      price: 71610,
                      amount: 75000,
                      total: 169660
                    },
                    {
                      key: '3',
                      price: 71605,
                      amount: 6000,
                      total: 94660
                    },
                    {
                      key: '4',
                      price: 71590,
                      amount: 60,
                      total: 88660
                    },
                    {
                      key: '5',
                      price: 71585,
                      amount: 46000,
                      total: 88600
                    },
                    {
                      key: '6',
                      price: 71582.5,
                      amount: 4000,
                      total: 42600
                    },
                    {
                      key: '7',
                      price: 71575,
                      amount: 6000,
                      total: 38600
                    },
                    {
                      key: '8',
                      price: 71572.5,
                      amount: 14000,
                      total: 32600
                    },
                    {
                      key: '9',
                      price: 71570,
                      amount: 6600,
                      total: 18600
                    },
                    {
                      key: '10',
                      price: 71567.5,
                      amount: 12000,
                      total: 12000
                    },
                    {
                      key: '11',
                      price: 71540.5,
                      amount: 6000,
                      total: 175660
                    },
                    {
                      key: '12',
                      price: 71535,
                      amount: 75000,
                      total: 169660
                    },
                    {
                      key: '13',
                      price: 71532,
                      amount: 6000,
                      total: 94660
                    },
                    {
                      key: '14',
                      price: 71525,
                      amount: 60,
                      total: 88660
                    },
                    {
                      key: '15',
                      price: 71522.5,
                      amount: 6200,
                      total: 88600
                    },
                    {
                      key: '16',
                      price: 71515,
                      amount: 1800,
                      total: 42600
                    },
                    {
                      key: '17',
                      price: 71512.5,
                      amount: 15610,
                      total: 38600
                    },
                    {
                      key: '18',
                      price: 71505,
                      amount: 6010,
                      total: 32600
                    },
                    {
                      key: '19',
                      price: 71497.5,
                      amount: 6600,
                      total: 18600
                    },
                    {
                      key: '20',
                      price: 71495,
                      amount: 40000,
                      total: 12000
                    }
                ]);
                setLoading(false);
            }, 2500);
        };

        tableData();
    }, []);

    const columns = [
        {
            title: loading ? <Skeleton.Input active /> : 'Price',
            dataIndex: 'price',
            key: 'price',
            render: text => loading ? <Skeleton active paragraph={{ rows: 0 }} /> : text 
        },
        {
            title: loading ? <Skeleton.Input active /> : 'Amount',
            dataIndex: 'amount',
            key: 'amount',
            render: text => loading ? <Skeleton active paragraph={{ rows: 0 }} /> : text
        },
        {
            title: loading ? <Skeleton.Input active /> : 'Total',
            dataIndex: 'total',
            key: 'total',
            render: text => loading ? <Skeleton active paragraph={{ rows: 0 }} /> : text
        },
    ];

    return (
        <div>
            <Table 
                dataSource={loading ? [{}] : data} 
                columns={columns}
                loading={loading} 
                pagination={false}
                scroll={{x: '100%'}}
            />
        </div>
    );
};

export default FirstTable;