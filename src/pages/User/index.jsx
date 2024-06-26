import React, { useEffect, useState } from "react";
// import { NavLink } from "react-router-dom";
// 新路由引入
import {useRoutes,Link} from 'react-router-dom';

import logstyle from './login.module.less'
import  './login.less'
// import initLoginBg from "./init.ts";
// 引入ant design
import { Input, Space ,Flex ,Button} from 'antd';


export default function User() {


    return (
        <div >
            {/* <p>登入页面</p> */}
            <Login />
        </div>
    )
}

// 登入框
function Login() {
    

   const [usernameVal,setUsernameVal]=useState('')
   const [passworldVal,setPassworldVal]=useState('')
   const [captchaVal,setCaptchaVal]=useState('')
    
   const usernameChange=(e)=>{
    setUsernameVal(e.target.value)
   }
   const passworldChange=(e)=>{
    setPassworldVal(e.target.value)
   }
   const captchaChange=(e)=>{
    setCaptchaVal(e.target.value)
   }

//    按钮事件
const gotoLogin=()=>{
    console.log("用户输入的用户名，密码，验证码分别是；",usernameVal,passworldVal,captchaVal)
    console.log("Username",usernameVal,"passworld",passworldVal)
}
    return (
        <div className="allloginone">
            <div className='loginone'>

                <div className='loginoneinto'>
                {/* 内容 */}
                    <div className={logstyle.loginPage}>
                        {/* 存放背景 */}
                        <canvas id="canvas" style={{ display: "block", width: '1535px', height: '635px' }}></canvas>
                        {/* 页面内容 */}
                        <div className={logstyle.loginBox}>
                            {/* 标题部分 */}
                            <div className={logstyle.title}>
                                <h1>用户登入</h1>
                            </div>
                            {/* 表单部分 */}
                            <div className="loginbox-form">

                                <Space direction="vertical" size="large" style={{ display: 'flex' }}>


                                    <div className="input-username"> <Input placeholder="用户名" onChange={usernameChange} /></div>

                                    <div className="input-possworld"> <Input.Password placeholder="密码" onChange={passworldChange} /></div>

                                    <div className="captchaBox">
                                        <div className="input-username"> <Input style={{ width: '353px' }} placeholder="验证码" onChange={captchaChange} /></div>
                                        <div className="captchaImg">
                                            <img style={{ height: '31.6px' }} src="http://web.900112.com/public/safecode.asp?" />
                                        </div>
                                    </div>
                                    {/* <Link to='/userpeo'> */}
                                    <Flex vertical gap="small" style={{ width: '100%', }}>
                                        <Button type="primary" block onClick={gotoLogin}>
                                            登入
                                        </Button>
                                    </Flex>
                                    {/* </Link> */}
                                    {/* 注册账号 */}
                                        <Link exact to='/register' id="registername" >
                                            注册账号
                                        </Link>
                                </Space>

                            </div>
                            <br/>
                            <Link exact to='/hhome' className={logstyle.hhome} >
                                    后台管理人员登入
                                        </Link>
                                
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
