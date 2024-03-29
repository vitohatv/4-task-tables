import { Button, Skeleton, Table, Tag } from "antd";
import Column from "antd/es/table/Column";
import "./SecondTable.css";

const SecondTable = () => {
  return (
    <div style={{ width: "100%", maxWidth: 900 }}>
      <Table
        dataSource={[{}, {}, {}, {}, {}]}
        pagination={false}
        size="small"
        className="table-second"
        scroll={{ x: "100%" }}
      >
        <Column
          title={<Skeleton.Input active />}
          dataIndex="price"
          key="price"
          render={(text) => <Skeleton active paragraph={{ rows: 0 }} />}
        />
        <Column
          title={<Skeleton.Input active />}
          dataIndex="amount"
          key="amount"
          render={(text) => <Skeleton active paragraph={{ rows: 0 }} />}
        />
        <Column
          title={<Skeleton.Input active />}
          dataIndex="total"
          key="total"
          render={(text) => <Skeleton active paragraph={{ rows: 0 }} />}
        />
      </Table>
    </div>
  );
};

export default SecondTable;
