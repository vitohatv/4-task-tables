import { Skeleton, Table } from "antd";
import { useState } from "react";

const TableOne = () => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const tableData = () => {
      setTimeout(() => {
        setData([
          {
            key: '1',
            name: 'John Brown',
            age: 25,
            hobby: 'Reading, painting',
            address: 'New York No. 1 Lake Park',
            company: 'ABC Inc.',
            email: 'johnDoee@gmail.com',
            phone: '173-4096-7270',
          },
          {
            key: '2',
            name: 'Jim Green',
            age: 42,
            hobby: 'Сoding',
            address: 'London No. 2 Lake Park',
            company: 'XYZ Ltd.',
            email: 'jimGree85@gmail.com',
            phone: '185-3259-2211',
          },
          {
            key: '3',
            name: 'Joe Black',
            age: 37,
            hobby: 'Fishing',
            address: 'Sidney No. 3 Lake Park',
            company: '123 Corp.',
            email: 'htdra3@gmail.com',
            phone: '177-777-7771',
          },
        ]);
        setLoading(false);
      }, 2600);
    };
  
    const columns = [
      {
        title: loading ? <Skeleton.Input active /> : 'Name',
        dataIndex: 'name',
        key: 'name',
        render: text => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text,
      },
      {
        title: loading ? <Skeleton.Input active /> : 'Age',
        dataIndex: 'age',
        key: 'age',
        render: text => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text,
      },
      {
        title: loading ? <Skeleton.Input active /> : 'Hobby',
        dataIndex: 'hobby',
        key: 'hobby',
        render: (text) => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text,
      },
      {
        title: loading ? <Skeleton.Input active /> : 'Address',
        dataIndex: 'address',
        key: 'address',
        render: text => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text,
      },
      {
        title: loading ? <Skeleton.Input active /> : 'Company',
        dataIndex: 'company',
        key: 'company',
        render: (text) => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text,
      },
      {
        title: loading ? <Skeleton.Input active /> : 'Email',
        dataIndex: 'email',
        key: 'email',
        render: (text) => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text,
      },
      {
        title: loading ? <Skeleton.Input active /> : 'Phone',
        dataIndex: 'phone',
        key: 'phone',
        render: (text) => loading ? <Skeleton active paragraph={{ rows: 1 }} /> : text,
      },
    ];
  
    tableData();
    return (
      <div className="App">
        <Table 
          className='table' 
          pagination={false} 
          bordered 
          columns={columns} 
          scroll={{x: '100%'}} 
          dataSource={loading ? [{}] : data} 
          loading={loading} 
        />
      </div>
    );
}

export default TableOne;