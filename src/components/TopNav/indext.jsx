import React, { useState } from "react";
import topnavstyle from "./style.module.less"
// 旧跳转路由
// import { NavLink } from "react-router-dom";
// import { Outlet } from "react-router-dom";

// 新路由引入
import {useRoutes,Link} from 'react-router-dom'

import { UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';



const TopNav = () => {
    return (
        <div className={topnavstyle.footer}>
            
            <ul className={topnavstyle.fix}>

                {/* <p id="address">定位</p> */}
                {/* <Location className="address"/> */}
                <li>
                    {/* exact高亮 */}
                    <Link to='/' id={topnavstyle.homename}>首页</Link>

                    {/* <NavLink exact to='/' id="homename" >
                        主页
                    </NavLink> */}
                </li>
                <li>
                     <Link to='/clafil'  id={topnavstyle.shopname}>电影</Link>

                </li>

                <li><Link to='/cinema' id={topnavstyle.cinema}>影院</Link></li>

                <li><Link to='/actout' id={topnavstyle.actout}>演出</Link></li>
            {/* 用户 */}
                <li>
                     <Link to='/user' id={topnavstyle.user}>
                        <Space direction="vertical" size={16}>
                            <Space wrap size={16}>
                                <Avatar shape="square" size={50} icon={<UserOutlined />} />
                            </Space>
                        </Space>
                     </Link>
                </li>
            </ul>
        </div>
    )
}
function Location() {
    const [city, setCity] = useState(

    )
    // 点击定位：左显示省份，点击省份，出现城市
    return (
        <div>
            <p className="address" onChange>定位</p>
            <form>
                <select>
                    <option>12</option>
                    <option>1</option>
                    <option>1</option>
                </select>
            </form>
        </div>

    )
}

export default TopNav