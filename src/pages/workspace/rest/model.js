import { Icon } from 'antd';
import React from 'react';

export default {
  namespace: "workspaceRest",
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
    ]
  },
  reducers: {

  },
  effects: {

  }
}
