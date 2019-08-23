import React from 'react';
import styles from './index.css';
import { Col, Icon, Menu, Row } from 'antd';
import LeftMenuDivider from '@/component/LeftMenuDivider';
import {Link} from 'umi';

class LeftMenu extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      defaultMenuItem: [],
    }
  }


  componentWillMount() {
    let path = this.props.location.pathname.split("/");
    if (path.length > 2 && path[2]) {
      this.setState({defaultMenuItem: [path[2]]})
    } else {
      this.setState({defaultMenuItem: ["home"]})
    }
  }

  menuItemMouseOver = (e) => {
    e.currentTarget.style.backgroundColor = "#F2F4F6";
  }

  menuItemMouseOut = (e) => {
    e.currentTarget.style.backgroundColor = "rgba(0, 0, 0, 0)";
  }

  render() {
    const {Item} = Menu;

    return (
      <div className={styles.workspace}>
        <Row gutter={16}>
          <Col span={4}>
            <Menu defaultSelectedKeys={this.state.defaultMenuItem}
                  style={{border: "0px", backgroundColor: "rgba(0, 0, 0, 0)"}}>
              <Item key={"home"} className={styles.menuItem}>
                <Link to={"/workspace"}>
                  <Icon type="appstore" />工作台
                </Link>
              </Item>
              <LeftMenuDivider/>
              <Item key={"file"} className={styles.menuItem}>
                <Link to={"/workspace/file"}/>
                <Icon type="file-text" />文档
              </Item>
              <Item key={"book"} className={styles.menuItem}>
                <Link to={"/workspace/book"}/>
                <Icon type="book" />知识库
              </Item>
              <LeftMenuDivider/>
              <Item key={"rest"} className={styles.menuItem}>
                <Link to={"/workspace/rest"}/>
                <Icon type="rest" />回收站
              </Item>
            </Menu>
          </Col>
          <Col span={20}>
            {this.props.children}
          </Col>
        </Row>
      </div>
    );
  }
}

export default LeftMenu;
