import styles from './index.css';
import { Layout } from 'antd';
import Header from '@/layouts/Header';
import React from 'react';

class BasicLayout extends React.Component {

  render() {
    const {Content} = Layout;
    const notExistsHead = ["/"];
    if (notExistsHead.find((n) => n === this.props.location.pathname)) {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
    else {
      return (
        <Layout>
          <Header {...this.props}/>
          <Content className={styles.normal}>
            {/*<h1 className={styles.title}>Yay! Welcome to umi!</h1>*/}

            <div className={styles.content}>
              {this.props.children}
              </div>
          </Content>
        </Layout>
      );
    }
  }

}

export default BasicLayout;
