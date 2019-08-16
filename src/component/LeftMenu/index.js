import React from 'react';
import styles from './index.css';
import { Col, Icon, Menu, Row } from 'antd';
import LeftMenuDivider from '@/component/LeftMenuDivider';

class LeftMenu extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      defaultMenuItem: [],
    }
  }


  componentWillMount() {
    let path = this.props.location.pathname.split("/");
    if (path.size > 1 && path[1]) {
      this.setState({defaultMenuItem: [path[1]]})
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
                <Icon type="appstore" />工作台
              </Item>
              <LeftMenuDivider/>
              <Item className={styles.menuItem}>
                <Icon type="file-text" />文档
              </Item>
              <Item className={styles.menuItem}>
                <Icon type="book" />知识库
              </Item>
              <LeftMenuDivider/>
              <Item className={styles.menuItem}>
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
