import React from 'react';
import styles from './index.css';
import { Button, Checkbox, Form, Icon, Input } from 'antd';
import Media from 'react-media';
import { connect } from 'react-redux';

const namespace = 'login2';
const stateConnetor = ({login2}) => {
  return {
    ...login2,
  };
}

@connect(stateConnetor)
class Login2 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let {remember, user} = this.props;
    const { getFieldDecorator } = this.props.form;
    // console.log(this.props.remember);
    return (
      <Media query={{maxWidth: 500}}>
        {matches => (
          <div className={matches ? styles.loginLayoutLow : styles.loginLayoutHigh}>
            <div className={styles.loginCard}>
              <div className={styles.logo}>
                {/*<img src={'https://gw.alipayobjects.com/zos/rmsportal/kyjrtmqaKAvzJAaoZfFp.svg'}/>*/}
              </div>
              <div className={styles.slogon}>
                <h1><span>博客</span></h1>
                <h3><span>专业知识记录</span></h3>
              </div>
              <div className={styles.loginForm}>
                <Form>
                  <Form.Item>
                    {getFieldDecorator('username', {
                      rules: [{ required: true, message: 'Please input your username!' }],
                      initialValue: user.username,
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="Username"
                        size={'large'}
                      />,
                    )}
                  </Form.Item>
                  <Form.Item>
                    {getFieldDecorator('password', {
                      rules: [{ required: true, message: 'Please input your Password!' }],
                      initialValue: user.password,
                    })(
                      <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="Password"
                        size={'large'}
                      />,
                    )}
                  </Form.Item>
                  <Form.Item className={styles.remember}>
                    {getFieldDecorator('remember', {
                      valuePropName: 'checked',
                      initialValue: remember,
                    })(<Checkbox>Remember me</Checkbox>)}
                    <a href="/" className={styles.forgot}>
                      Forgot password
                    </a><br/>
                  </Form.Item>
                  <Button type="primary" htmlType="submit" size={'large'} className={styles.button}>
                    Log in
                  </Button>
                </Form>
              </div>
              <div className={styles.otherLogin}></div>
            </div>
          </div>
        )}
      </Media>
    );
  }
}

export default Form.create()(Login2);
