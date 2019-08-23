import React from 'react';
import styles from './index.css';
import LeftMenu from '@/component/LeftMenu';
import { Button, Form, Icon, Input, Modal, Select, Table } from 'antd';
import { connect } from 'react-redux';

const namespace = "workspaceFile";
const stateConnector = ({workspaceFile}) => {
  return {
    ...workspaceFile,
  };
};
const optConnector = (dispatch) => {
  return {
    updateModalState: (payload) => {
      dispatch({
        type: namespace + "/updateModalState",
        payload
      })
    }
  }
};

@connect(stateConnector, optConnector)
class FileWorksp extends React.Component{

  handleModalOK = () => {
    let formData = this.props.form.getFieldsValue();
    console.log(formData);
  }

  handleModalCancel = () => {
    this.props.form.resetFields();
    this.props.updateModalState({
      visible: false,
    });
  }

  showModal = () => {
    this.props.updateModalState({
      visible: true,
    });
  }

  render() {
    let {Option} = Select;
    let {columns, dataSource, modal} = this.props;
    return (
      <LeftMenu {...this.props}>
        <div className={styles.content}>
          {/* 排序方式及一些操作按钮 */}
          <div className={styles.head}>
            <Select defaultValue={"ts"} className={styles.title}>
              <Option value={"ts"}>最近修改</Option>
              <Option value={"creatTime"}>最近创建</Option>
            </Select>
            <div className={styles.extra}>
              <Input prefix={<Icon type={"search"} style={{color: '#CDBFCD'}}></Icon>}
                     allowClear
                     className={styles.searchInput}/>
              <Button type={"primary"} className={styles.newButton} onClick={this.showModal}>新建文档</Button>
            </div>
          </div>
          {/* 数据表格 */}
          <div className={styles.table}>
            <Table columns={columns} dataSource={dataSource} pagination={false} size={"middle"}></Table>
          </div>
          <Modal {...modal} onOk={this.handleModalOK} onCancel={this.handleModalCancel}>

          </Modal>
        </div>
      </LeftMenu>
    );
  }
}

export default Form.create()(FileWorksp);
