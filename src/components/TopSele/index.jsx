import React from "react";
import './style.less'
import { NavLink } from "react-router-dom";


const TopSele = () => {

    return (
        <div>
            <div className="topsels-name">
                <ul className="topsels-name-ul">
                    <li>
                        {/* exact高亮 */}
                        <NavLink  to='/nowfil' id="nowfilname" >
                          正在热映
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/upfil' id="upfilname">
                          即将上映
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to='/clafil' id="clafilname">
                          经典影片
                        </NavLink>
                    </li>
                </ul>
            </div>



        </div>
    )
}



export default TopSele