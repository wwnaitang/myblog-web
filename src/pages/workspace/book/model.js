import { Icon } from 'antd';
import React from 'react';

export default {
  namespace: "workspaceBook",
  state: {
    columns: [
      {
        title: "名称",
        dataIndex: "name",
        render: (text, record) => {
          return (
            <a href="">
              <Icon type="book" style={{margin: "0px 6px"}} /><span style={{color: "black"}}>{text}</span>
            </a>
          );
        }
      },
      {
        title: "状态",
        dataIndex: "status"
      },
      {
        title: "归属",
        dataIndex: "scope"
      },
      {
        title: "操作",
        dataIndex: "opt",
        render: (text, record) => {
          return <a href="">修改</a>
        }
      },
    ],
    dataSource: [
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
      {
        name: "人员变动管理",
        status: "未发布",
        scope: "NC"
      },
    ],
    modal: {
      visible: false,
      confirmLoading: false,
      title: "新增知识库",
    }
  },
  reducers: {
    updateModalState: (state, {payload}) => {
      let newModal = {...state["modal"], ...payload}
      // 下面的方法返回state后不会调用render
      // 原因大概是，这种方法会直接修改state，在renturn之后框架会将返回值与state对比是否改变再进行render
      /*let {visible, confirmLoading} = payload;
      if (visible !== undefined) {
        modal.visible = visible;
      }
      if (confirmLoading !== undefined) {
        modal.confirmLoading = confirmLoading;
      }*/
      return {...state, modal: newModal};
    }
  },
  effects: {

  }
}
