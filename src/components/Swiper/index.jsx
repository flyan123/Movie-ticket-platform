import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
    // height: '452px',
    // color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
    dotWidth:'452px'
};
const Swiper = () => (
    <Carousel autoplay >
        <div>
            <h3 style={contentStyle}>
                <img style={{width:"100%"}} src='https://img2.baidu.com/it/u=3887787861,1234070352&fm=253&fmt=auto&app=138&f=JPEG?w=1215&h=429'/>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
               <img style={{width:"100%"}} src='https://img2.baidu.com/it/u=2452014056,4054215755&fm=253&fmt=auto&app=138&f=JPEG?w=1280&h=452'/>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
               <img style={{width:"100%"}} src='https://img1.baidu.com/it/u=1690770501,2376046528&fm=253&fmt=auto&app=138&f=JPEG?w=1280&h=452'/>
            </h3>
        </div>
        <div>
            <h3 style={contentStyle}>
               <img style={{width:"100%"}} src='https://img0.baidu.com/it/u=292473075,3974453600&fm=253&fmt=auto&app=138&f=JPEG?w=1215&h=429'/>
            </h3>
        </div>
    </Carousel>
);
export default Swiper;