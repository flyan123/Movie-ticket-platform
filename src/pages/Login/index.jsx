import React, { useEffect, useState } from "react";
import logstyle from './login.module.less'
import  './login.less'
import initLoginBg from "./init.ts";
// 引入ant design
import { Input, Space ,Flex ,Button} from 'antd';
import { HomeTwoTone,ContactsTwoTone } from '@ant-design/icons';
// 新路由引入
import {useRoutes,Link} from 'react-router-dom'


const Loginto = () => {

    useEffect(() => {
        initLoginBg();
        Window.onresive = function () { initLoginBg() }
        // 自适应背景
    }, [])

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
}

    return (

        <div className={logstyle.loginPage}>

            {/* 存放背景 */}
            <canvas id="canvas" style={{ display: "block", width:'1536px',height:'736px'}}></canvas>
            {/* 页面内容 */}
            <div className={logstyle.loginBox}>

                {/* 首页图标 */}
                <div className={logstyle.hometu}>
                     <Link to='/home'><HomeTwoTone style={{fontSize:'3em'}}/></Link>
                </div>

                {/* 注册页图标 */}
                <div className={logstyle.registertu}>
                <ContactsTwoTone style={{fontSize:'3em'}}/>
                </div>

                {/* 标题部分 */}
                <div className={logstyle.title}>
                    <h1> 电影票平台 </h1>
                </div>
                {/* 表单部分 */}
                <div className="loginbox-form">

                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>

                     
                     <div className="input-username"> <Input placeholder="用户名" onChange={usernameChange}/></div>

                       <div className="input-possworld"> <Input.Password placeholder="密码"  onChange={passworldChange}/></div>

                         <div className="captchaBox">
                            <div className="input-username"> <Input style={{width:'353px'}} placeholder="验证码" onChange={captchaChange} /></div>
                            <div className="captchaImg">
                                <img style={{height:'31.6px'}} src="http://web.900112.com/public/safecode.asp?"/>
                            </div>
                         </div>
        {/* !!! 先配置跳转 */}
                        <Flex vertical gap="small" style={{ width: '100%', }}>
                            <Button type="primary" block onClick={gotoLogin}>
                               登入
                            </Button>
                        </Flex>
                    </Space>
                </div>

            </div>
        </div>
    )
}
export default Loginto