import React, {  useState } from 'react';
import { NavLink } from "react-router-dom";
import './style.less'
import signupstyle from './sig.module.less'
import {
  Button,
  Checkbox,
  Form,
  Input,
  Select,
} from 'antd';


// const { Option } = Select;

const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};


const Register = () => {

    const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log('管理员新用户输入的: ', values);
    // console.log(this.state.nickname);
  };

  // 解构 赋值 多个变量
  const [values, setValues] = useState();  
  
  //更新字段  
  const handleInputChange = (e) => {  
    const { label, value } = e.target;  
    setValues(prevValues => ({  
      ...prevValues,  
      [label]: value, // 使用计算属性名称来动态更新对应字段的值  
    }));  
  };  
    return (
        <div className="register-bj">
            <div className="rg_layout">
                {/* 新用户注册 */}
                <div className="rg_left">
                    <p>新用户注册</p>
                </div>
                {/* 内容 */}
                <div className={signupstyle.all}>

                    <Form
                        {...formItemLayout}
                        form={form}
                        name="register"
                        onFinish={onFinish}
                        initialValues={{
                            residence: ['zhejiang', 'hangzhou', 'xihu'],
                            prefix: '86',
                        }}
                        style={{
                            maxWidth: 700,
                        }}
                        scrollToFirstError
                    >
                        {/* 1 */}
                        {/* <h1>管理员注册</h1> */}

                        {/* 2. 用户名 nickname */}
                        <Form.Item
                            name="nickname"
                            label="用户名"

                            tooltip="你希望别人怎么称呼你?"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的昵称!',
                                    whitespace: true,
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>


                        {/*3.  密码 password */}
                        <Form.Item
                            name="password"
                            label="密码"
                            rules={[
                                {
                                    required: true,
                                    message: '请输入您的密码!',
                                },
                            ]}
                            hasFeedback
                        >
                            <Input.Password />
                        </Form.Item>


                        {/* 4. 确认密码 confirm */}
                        <Form.Item
                            name="confirm"
                            label="确认密码"
                            dependencies={['password']}
                            hasFeedback
                            rules={[
                                {
                                    required: true,
                                    message: '请确认您的密码!',
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('您输入的新密码不匹配!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>


                        {/* 5. 电子邮件 email */}
                        <Form.Item
                            name="email"
                            label="email"
                            rules={[
                                {
                                    type: 'email',
                                    message: '输入无效的电子邮件!',
                                },
                                {
                                    required: true,
                                    message: '请输入您的邮箱!',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        {/* 8.协议 */}
                        <Form.Item
                            name="agreement"
                            valuePropName="checked"
                            rules={[
                                {
                                    validator: (_, value) =>
                                        value ? Promise.resolve() : Promise.reject(new Error('应该接受协议')),
                                },
                            ]}
                            {...tailFormItemLayout}
                        >
                            <Checkbox>
                                我已经阅读了 <a href="">协议</a>
                            </Checkbox>
                        </Form.Item>


                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit" >
                                <NavLink to='/user'>
                                注册
                                </NavLink>
                            
                            </Button>
                        </Form.Item>

                    </Form>
                </div>
                {/* 已有账号?立刻登入 */}
                <div className="rg_right">
                    <NavLink exact to='/user' id="username" >
                        <p>已有账号？立刻登入</p>
                    </NavLink>

                </div>
            </div>


        </div>
    )
}


export default Register