import React from 'react';
import styles from './index.css';
import inbetweeningImg from '../../../assets/login/inbetweening.png';
import { Button, Checkbox, Form, Icon, Input } from 'antd';


class Login extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className={styles.normal}>
        <div className={styles.card}>
          <div className={styles.inbetweening}>
            <img style={{width: '100%'}} src={inbetweeningImg}/>
          </div>

          <div className={styles.loginCard}>
            <h1>系统管理</h1>
            <Form>
              <Form.Item>
                {getFieldDecorator('username', {
                  rules: [{ required: true, message: 'Please input your username!' }],
                })(
                  <Input
                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    placeholder="Username"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('password', {
                  rules: [{ required: true, message: 'Please input your Password!' }],
                })(
                  <Input
                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                    type="password"
                    placeholder="Password"
                  />,
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator('remember', {
                  valuePropName: 'checked',
                  initialValue: true,
                })(<Checkbox>Remember me</Checkbox>)}
                <a className={styles['login-form-forgot']} href="">
                  Forgot password
                </a><br/>
                <Button type="primary" htmlType="submit" className={styles['login-form-button']}>
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    );
  }

}

export default Form.create({ name: 'normal_login' })(Login);
