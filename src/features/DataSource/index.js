import React from 'react';
import { Card, Table} from 'antd'


// import AdvancedSearchForm from './SearchBar'
console.log('datasource/index.js');
function test(test){return test}
const columns = [
    {
        title: 'Name',
        dataIndex: 'name',
        render: text => <a>{text}</a>,
    },
    {
        title: 'Cash Assets',
        className: 'column-money',
        dataIndex: 'money',
    },
    {
        title: 'Address',
        dataIndex: 'address',
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        money: '￥300,000.00',
        address: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        money: '￥1,256,000.00',
        address: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        money: '￥120,000.00',
        address: 'Sidney No. 1 Lake Park',
    },
];
export default function DataSource() {
    return (
        <div>
            <Card>
                {/* <AdvancedSearchForm /> */}
            </Card>

            <Card style={{ marginTop: "20px" }}>
                <Table
                    columns={columns}
                    dataSource={data}
                    bordered
                    title={() => 'Header'}
                    footer={() => 'Footer'}
                />
            </Card>

        </div>
    )
}