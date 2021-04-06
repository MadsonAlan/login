import React from 'react'
import { Button, Checkbox, Form, Input, Layout, Typography } from 'antd'
// import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Content, Header } from 'antd/lib/layout/layout'
import Title from 'antd/lib/typography/Title'
const { Text, Link } = Typography;
export default function Home() {
  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };
  const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
  };

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };
  return (
    <Layout className="site-layout-background" style={
      {
        minWidth: '100vw',
        minHeight: '100vh',
        padding: '24px 0',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'wheat'
      }
    }>
      <Content style={{
        borderRadius:5,
        maxHeight: '400px',
        maxWidth: '70vw',
        paddingTop:'20px',
        padding: '0 50px',
        backgroundColor:'whitesmoke'
      }}>
        <Title style={{
          textAlign:'center',
          marginTop:'55px',
          marginBottom: '55px'
        }}>Login Example</Title>
        {/* <Title level={4} type="secondary">Madson Alan</Title> */}
        <Form
          {...layout}
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
        </Button>
          </Form.Item>
        </Form>
      </Content>
    </Layout>
  )
}
