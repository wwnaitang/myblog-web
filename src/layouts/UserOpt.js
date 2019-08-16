import React from 'react';
import styles from './UserOpt.css';
import { Avatar, Badge, Dropdown, Icon, Menu, Popover } from 'antd';
import { connect } from 'react-redux';

const namespace = 'user';
const stateConnector = ({user}) => {
  return {
    ...user,
  };
};
const optConnector = (dispatch) => {
  return {

  }
};

@connect(stateConnector, optConnector)
class UserOpt extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      target: "",
      css: {color: "#1890FF"}
    };
  }

  mouseMoveOn = (e) => {
    this.setState({
      ...this.state,
      target: e.currentTarget.id,
    });
    console.log(this.state.target);
  }

  mouseMoveOut = () => {
    this.setState({
      ...this.state,
      target: "",
    });
  }

  render() {
    const {Item} = Menu;
    let {target} = this.state;
    const newMenuContent = (
      <Menu>
        <Item>新建文档</Item>
        <Item>新建知识库</Item>
        <Item>上传照片</Item>
      </Menu>
    );
    const userMenuContent = (
      <Menu>
        <Item>退出登陆</Item>
      </Menu>
    );
    return (
      <div className={styles.userOpt}>
        <div id={"newGroup"} className={styles.optGroup} onMouseOver={this.mouseMoveOn} onMouseOut={this.mouseMoveOut}>
          <Dropdown overlay={newMenuContent}>
            <span style={{display: "flex", alignItems: "center"}}>
              <Icon type={"plus"}
                    style={target === "newGroup" ?
                      {fontSize: "16px", color: "#1890ff"} : {fontSize: "16px"}}/>
              <Icon type={"caret-down"} style={{fontSize: "4px", color: "#C8C8C8", paddingLeft: "2px"}}/>
            </span>
          </Dropdown>
        </div>
        <div id={"notifications"} className={styles.optGroup} onMouseOver={this.mouseMoveOn} onMouseOut={this.mouseMoveOut}>
          <Badge count={this.props.notificationsCount} dot>
            <Icon type={"notification"}
                  style={target === "notifications" ?
                    {fontSize: "16px", paddingRight: "2px", color: "#1890ff"} : {fontSize: "16px", paddingRight: "2px"}}/>
          </Badge>
        </div>
        <div className={styles.optGroup}>
          <Dropdown overlay={userMenuContent}>
            <span style={{display: "flex", alignItems: "center"}}>
              <Avatar size={"small"} style={{backgroundColor: "#87d068"}}>U</Avatar>
              <Icon type={"caret-down"} style={{fontSize: "4px", color: "#C8C8C8", paddingLeft: "2px"}}/>
            </span>
          </Dropdown>
        </div>
      </div>
    );
  }
}

export default UserOpt;
