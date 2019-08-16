import React from 'react';
import { connect } from 'react-redux';
import styles from './index.css';
import { Button, Col, Icon, Menu, Row } from 'antd';
import LeftMenu from '@/component/LeftMenu';
import FileCard from '@/component/FileCard';
import BookCard from '@/component/BookCard';
import MoreCard from '@/component/MoreCard';


const namespace = "workspaceHome";
const stateConnector = ({workspaceHome}) => {
  return {
    ...workspaceHome,
  };
};
const optConnector = (dispatch) => {
  return {
    initData: () => {
      dispatch({
        type: namespace + '/initData',
      });
    }
  }
};

@connect(stateConnector, optConnector)
class WorkspaceHome extends React.Component{

  componentDidMount() {
    this.props.initData();
  }

  render() {
    let {fileData, bookData} = this.props;
    return (
      <LeftMenu {...this.props}>
        {/*<Card title={"最近编辑"} option={"新建文档"} type={"file"} itemData={this.props.fileData} />*/}
        {/*<Card title={"最近参与的知识库"} option={"新建知识库"} type={"book"} itemData={this.props.bookData} />*/}

        <div>
          <div className={styles.head}>
            <span>最近编辑</span>
            <span style={{padding: "10px 0px"}}>
            <Button>新建文档</Button>
          </span>
          </div>
          <div>
            <Row>
              {fileData.map((item, index) => {
                if (index < 5) {
                  return (<Col span={12}><FileCard href={item.href} title={item.title} info={item.info} editUrl={item.editUrl} /></Col>);
                }
              })}
              <Col span={12}><MoreCard href={""}/></Col>
            </Row>
          </div>
        </div>

        <div>
          <div className={styles.head}>
            <span>最近参与的知识库</span>
            <span style={{padding: "10px 0px"}}>
            <Button>新建知识库</Button>
          </span>
          </div>
          <div>
            <Row>
              {bookData.map((item, index) => {
                if (index < 5) {
                  return (<Col span={12}><BookCard href={item.href} title={item.title} info={item.info} editUrl={item.editUrl} /></Col>);
                }
              })}
              <Col span={12}><MoreCard href={""}/></Col>
            </Row>
          </div>
        </div>
      </LeftMenu>
    );
  }
}

export default WorkspaceHome;
