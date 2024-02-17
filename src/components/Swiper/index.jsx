import React, { useState } from "react";
// 需安装依赖：
// 1.npm install --save react-swipeable-views -f
// 2.npm install --save react-swipeable-views-utils -f（安装依赖要退出运行状态，依赖不成功空格-f强制执行）
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import './style.less'
import Pagination from "./Pagination"

// 此处为轮播图组件
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);


const Swiper = (props)=>{

    const [index,setIndex]=useState(0)

    function handleChangeIndex(index){
        // 引入自动轮播
        setIndex(index)
    }
    return (
        <div className="swiper" >
            {/* index:高亮的设置，默认在那一张 */}
          <AutoPlaySwipeableViews index={index} onChangeIndex={handleChangeIndex}>
            {
                props.banners.map((ele,index)=>{
                    return(
                        <div className="swiper-view" key={index}>
                            <img src={ele}  />
                         </div>
                    )
                })
            }
               
          </AutoPlaySwipeableViews>

          <Pagination len={props.banners.length} currentIndex={index}/>
        </div>
      );
}



export default Swiper
