import React from 'react';
import styles from './index.css';
import LeftMenu from '@/component/LeftMenu';
import { Button, Form, Icon, Input, Modal, Select, Switch, Table } from 'antd';
import { connect } from 'react-redux';

const namespace = "workspaceBook";
const stateConnector = ({workspaceBook}) => {
  return {
    ...workspaceBook,
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
class BookWorksp extends React.Component{

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
    const { getFieldDecorator } = this.props.form;
    const { TextArea } = Input;
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
              <Button type={"primary"} className={styles.newButton} onClick={this.showModal}>新建知识库</Button>
            </div>
          </div>
          {/* 数据表格 */}
          <div className={styles.table}>
            <Table columns={columns} dataSource={dataSource} pagination={false} size={"middle"}></Table>
          </div>
          <Form>
            <Modal {...modal} onOk={this.handleModalOK} onCancel={this.handleModalCancel}>
              <Form.Item label={"名称"}>
                {getFieldDecorator("name", {
                  rules: [{ required: true, message: "名称不能为空" }],
                  initialValue: ""
                })(
                  <Input
                    size={'large'}
                  />
                )}
              </Form.Item>
              <Form.Item label={"描述"}>
                {getFieldDecorator("describe", {
                  initialValue: ""
                })(
                  <TextArea autosize={{ minRows: 2, maxRows: 6 }}/>
                )}
              </Form.Item>
              <Form.Item label={"公开"} labelCol={{span: 3}} labelAlign={"left"}>
                {getFieldDecorator("publicFlag", {
                  valuePropName: "checked",
                  initialValue: true,
                })(
                  <Switch/>
                )}
              </Form.Item>
            </Modal>
          </Form>
        </div>
      </LeftMenu>
    );
  }
}

export default Form.create()(BookWorksp);
