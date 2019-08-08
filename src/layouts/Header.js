import React from 'react';
import { Icon, Input, Layout, Menu } from 'antd';
import styles from './Header.css';
import UserOpt from '@/layouts/UserOpt';
import menu from 'eslint-plugin-jsx-a11y/src/util/implicitRoles/menu';

class Header extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      currentMenu: [],
    };
  }

  componentWillMount() {
    let {pathname} = this.props.location;
    if (!pathname) {
      return;
    }
    let secondSlashIndex = pathname.substr(1).indexOf("/") + 1;
    secondSlashIndex = secondSlashIndex > 0 ? secondSlashIndex : pathname.length;
    let menu = pathname.substring(1, secondSlashIndex);
    this.setState({currentMenu: [menu]});
  }

  render() {
    const {Header} = Layout;
    const {Item} = Menu;
    return (
      <Header className={styles.normal}>
        <div className={styles.headerView}>
          <div className={styles.logo}>
            <a href="http://localhost:8000">
              <img src="" alt="语雀"/>
            </a>
          </div>
          <div className={styles.userView}>
            <UserOpt />
          </div>
          <div className={styles.searchView}>
            <Input placeholder={"Enter search value"}
                   prefix={<Icon type={"search"} style={{color: '#CDBFCD'}}></Icon>}
                   className={styles.searchInput}
            />
          </div>
          <div className={styles.menuView}>
            <Menu mode="horizontal"
                  style={{lineHeight: "64px", border: "0px"}}
                  defaultSelectedKeys={this.state.currentMenu}
            >
              <Item key={"login2"} style={{border: '0px'}}>首页</Item>
              <Item key={"root"} style={{border: '0px'}}>知识库</Item>
              <Item style={{border: '0px'}}>相册</Item>
              <Item style={{border: '0px'}}>关于我</Item>
            </Menu>
          </div>
        </div>
      </Header>
    );
  }
}

export default Header;
