import React from 'react'
import "./style.less"

const Seletu =(src,name,score)=>{
    return(
        <div className='seletu-name' >
            {/* 图片 */}
            <div className='seletu-tu'>
                <a href='#' >
                    <div >
                        {/* src={src} */}
                        <img 
                        src={src} />
                    </div>
                </a>
            </div>
            {/* 购票小标 */}
            <div className='seletu-biao'>购票</div>
            {/* 电影名：name={name} */}
            <div className='seletu-tu-name'><a href='#' style={{color:'black'}}> {name}</a></div>
            {/* 评分：score={score} */}
            <div className='seletu-tu-score'>{score}</div>
        </div>
    )
}

export default Seletu