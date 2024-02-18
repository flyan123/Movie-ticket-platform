import React from "react"
import "./cast.less"
import castpeople from "./castpeople.json"

const Cast = () => {
    return (
        <div className="cart">
            {/* 导演 */}
            <div>
                <div style={{ "marginTop": "31px " }}>导演 (1)</div>
                <ul>
                    <li>
                        {/* 导演图片 */}
                        <img src="https://p0.pipi.cn/basicdata/fb73862fc69f2a8ea306d620fb1f9beda0667.jpg?imageView2/1/w/128/h/170" />
                        {/* 导演名字 */}
                        <div className="castname">董润年</div>
                    </li>
                </ul>
            </div>
            {/* 演员 */}
            <div>
                <div style={{ "marginTop": "45px " }}>演员 </div>
                <ul>
                   {castpeople.map(castpeoples=>(
                     <li key={castpeoples.id}>
                     <img src={castpeoples.src}/>
                     <div className="castname">{castpeoples.name}</div>
                     <div className="castname">{castpeoples.names}</div>
                 </li>
                   ))}
                </ul>
            </div>
            {/* 编剧 */}
            <div>
                <div style={{ "marginTop": "25px " }}>编剧 （2）</div>
                <ul>
                    <li>
                        <img src="https://p0.pipi.cn/basicdata/fb73862fc69f2a8ea306d620fb1f9beda0667.jpg?imageView2/1/w/128/h/170" />
                        <div className="castname">董润年</div>
                    </li>
                    <li>
                        <img src="https://p0.pipi.cn/basicdata/25bfd6d77a39ab16bd923535048a49b9b525f.jpg?imageView2/1/w/128/h/170" />
                        <div className="castname">应萝佳</div>
                    </li>
                   
                </ul>
            </div>
        </div>
    )
}

export default Cast