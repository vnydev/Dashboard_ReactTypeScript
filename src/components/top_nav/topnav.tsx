import * as React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";
import {
    UserAddOutlined,
    HomeFilled,
} from "@ant-design/icons";
import "./style.scss";

const { SubMenu } = Menu;

class TopNavComponent extends React.Component {
    state = {
        current: "mail",
    };

    handleClick = (e: any) => {
        console.log("click ", e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <div className="top-nav">
                <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"

                >
                    <Menu.Item key="1" icon={<UserAddOutlined />}>
                        <Link to="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="2" icon={<UserAddOutlined />}>
                        <Link to="/top">Top Users</Link>
                    </Menu.Item>
                    <SubMenu icon={<HomeFilled />} title="">
                        <Menu.Item key="3"> 
                            <Link to="/">Home</Link> 
                        </Menu.Item>
                        <Menu.Item key="4">Logout</Menu.Item>
                    </SubMenu>
                </Menu>
            </div>
        );
    }
};

export default TopNavComponent;