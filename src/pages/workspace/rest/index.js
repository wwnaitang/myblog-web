import React from 'react';
import styles from './index.css';
import LeftMenu from '@/component/LeftMenu';
import { Button, Icon, Input, Modal, Select, Table } from 'antd';
import { connect } from 'react-redux';

const namespace = "workspaceRest";
const stateConnector = ({workspaceRest}) => {
  return {
    ...workspaceRest,
  };
};
const optConnector = (dispatch) => {
  return {
  }
};

@connect(stateConnector, optConnector)
class RestWorksp extends React.Component{

  render() {
    let {Option} = Select;
    let {columns, dataSource} = this.props;
    return (
      <LeftMenu {...this.props}>
        <div className={styles.content}>
          {/* 排序方式及一些操作按钮 */}
          <div className={styles.head}>
            <span className={styles.title}>知识库</span>
            <div className={styles.extra}>
              <Input prefix={<Icon type={"search"} style={{color: '#CDBFCD'}}></Icon>}
                     allowClear
                     className={styles.searchInput}/>
            </div>
          </div>
          {/* 数据表格 */}
          <div className={styles.table}>
            <Table columns={columns} dataSource={dataSource} pagination={false} size={"middle"}></Table>
          </div>
        </div>
      </LeftMenu>
    );
  }
}

export default RestWorksp;
