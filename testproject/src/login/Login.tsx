import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import React from 'react';
import "./Login.less"

const Login: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };

  return (
    <Form  style={{ width: 500, marginTop:300, marginLeft:300 }}
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <p className='login-welcome'>欢迎登录xxx系统</p>
      <Form.Item
        name="username"
        className='login-form-l1'
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <Input style={{ width: 300 }} prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        className='login-form-l2'
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <Input style={{ width: 300 }}
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" className='login-form-l3' valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" onClick={()=>{window.location.href="/"}}>
          登录
        </Button>
        <br /> <a className="login-form-register" href="">register now</a>
      </Form.Item>
    </Form>
  );
};

export default Login;