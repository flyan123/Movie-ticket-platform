import React from "react";
import { NavLink } from "react-router-dom";
import "./style.less"
// import '../../../public/TwoSeledate/index.json'
import TwoSeledate from './TwoSeledate/index.json'
// console.log(TwoSeledate)
// fetch('../../../public/TwoSeledate/index.json')
// console.log(name)
// 只有 （爱情 喜剧 动画片）跳转链接
const TwoSele = () => {
    

    return (
        <div className="twoselename">
            <ul>
                <span style={{padding:"20px 0px 0px 20px"}}>类型：</span><br/>
                <li>
                    {/* exact高亮 */}
                    <NavLink exact to='/lovecla' id="loveclaname" >
                        爱情
                    </NavLink>
                </li>
                <li>
                    <NavLink  to='/comedy' id="comedyname">
                        喜剧
                    </NavLink>
                </li>
                <li>
                    <NavLink  to='/cartoon' id="cartoonname">
                         动画片
                    </NavLink>
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