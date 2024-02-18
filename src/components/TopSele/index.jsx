import React from "react";
import './style.less'
// import { NavLink } from "react-router-dom";

// 新路由引入
import {useRoutes,Link} from 'react-router-dom'


const TopSele = () => {

    return (
        <div>
            <div className="topsels-name">
                <ul className="topsels-name-ul">
                    <li>
                        {/* exact高亮 */}
                        <Link  to='/nowfil' id="nowfilname" >
                          正在热映
                        </Link>
                    </li>
                    <li>
                        <Link to='/upfil' id="upfilname">
                          即将上映
                        </Link>
                    </li>
                    <li>
                        <Link to='/clafil' id="clafilname">
                          经典影片
                        </Link>
                    </li>
                </ul>
            </div>



        </div>
    )
}



export default TopSele