import React from "react";
// import { NavLink } from "react-router-dom";
// 新路由引入
import {useRoutes,Link} from 'react-router-dom'
import "./style.less"

import TwoSeledate from './TwoSeledate/index.json'

// 只有 （爱情 喜剧 动画片）跳转链接
const TwoSele = () => {
    

    return (
        <div className="twoselename">
            <ul>
                <span style={{padding:"20px 0px 0px 20px"}}>类型：</span><br/>
                <li>
                    {/* exact高亮 */}
                    <Link  to='/lovecla' id="loveclaname" >
                        爱情
                    </Link>
                </li>
                <li>
                    <Link  to='/comedy' id="comedyname">
                        喜剧
                    </Link>
                </li>
                <li>
                    <Link  to='/cartoon' id="cartoonname">
                         动画片
                    </Link>
                </li>
                <li>剧情</li>
                {/* {TwoSeledate.map((id,name)=>{
                    <li key={id}>{name}</li>
                })} */}
                 {TwoSeledate.map(TwoSeledates=>
                <li key={TwoSeledates.id}>
                {TwoSeledates.name} 
              
             </li> 
          )}
                
            </ul>
        </div>
    )
}

export default TwoSele