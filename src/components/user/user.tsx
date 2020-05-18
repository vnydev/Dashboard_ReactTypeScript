import * as React from 'react';
import { Row, Col, Spin, Table } from 'antd';
import { withRouter, RouteComponentProps } from 'react-router-dom';

class UserComponent extends React.Component<RouteComponentProps>{
    
    componentDidMount(){
        const { getUsers }: any = this.props;
        getUsers()
    }

    columns: any[] = [
        {
            title: 'Username',
            dataIndex: 'username',
            key: 'username',
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Phone',
            dataIndex: 'phone',
            key: 'phone',
        },
        {
            title: 'Website',
            dataIndex: 'website',
            key: 'website',
        },
        {
            title: 'Company Name',
            dataIndex: 'company.name',
            key: 'companyname',
            // render: (record: any) => record.name
        },
    ];

    render () {
        const { isLoading, users=[] }: any = this.props;
        return(
            <Spin spinning={isLoading}>
                <Row>
                    <Col span={24}>
                        <Table
                            rowKey={record => record.id}
                            columns={ this.columns } 
                            dataSource={ users } 
                            pagination={false}
                        />
                    </Col>
                </Row>
            </Spin>
        )
    }
}

export default withRouter(UserComponent);