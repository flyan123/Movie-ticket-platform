import React,{useState} from "react";
import './onehome.less'
import Buttonzu from '../../components/Buttonzu/index'
import Person from "./people.json"
import Teaser from "./teaser.json"
import Cast from "./Cast/Cast";
import Dephotos from "./Dephotos/dephotos";
import Refer from "./Refer/Refer";

const Onehome = () => {
        // 总：
        const [dealltext,setDealltext]=useState(Dephotos)
    // 介绍
    // const [dephotos,setDephotos]=useState(Refer)
     // 演职人员
    //  const [cast,setCast]=useState(Cast)
    //  图集
    // const [refer,setRefer]=useState(Dephotos)

    return (
        <div >
            {/* 年会不能停！详情页 */}
            {/* 头部 */}
            <div className="top-main">

                {/* 图片 */}
                <div className="top-main-tu"><img
                    src="https://p0.pipi.cn/mmdb/54ecde8d71f71f16bd395b79f9ead85379ce7.jpg?imageView2/1/w/464/h/644"
                /></div>

                {/* 电影相关信息 */}
                <div>
                    {/* 名称 */}
                    <div className="top-main-text">
                        <h1>年会不能停！</h1>
                        <div className="top-main-en">Johnny Keep Walking!</div>
                        <ul className="top-main-text-ul">
                            <li >
                                <a href="http://localhost:3000/onehome" className="top-main-text-con">喜剧 </a>
                                <a href="http://localhost:3000/onehome" className="top-main-text-pl"> 剧情</a>
                            </li>
                            <li className="top-main-text-time">中国大陆 / 117分钟</li>
                            <li className="top-main-text-com-tim">2023-12-29 12:00中国大陆上映</li>
                        </ul>
                    </div>
                    {/* 想看、评分、特惠购票 */}
                    <div className="top-main-wen">
                        <a href="http://localhost:3000/onehome" className="top-main-wen-w"><div>♥ 想 看</div></a>
                        <a href="http://localhost:3000/onehome" className="top-main-wen-p"><div>☆ 评 分</div></a>
                        <br />
                        <a href="http://localhost:3000/onehome" className="top-main-wen-t"><div>特惠购票</div></a>
                    </div>
                    {/* 猫眼口碑评分 */}
                    <div className="top-main-wor">
                        <p>猫眼口碑</p>
                        <div className="top-main-wor-shu">
                            <span className="top-main-wor-sco">9.6</span>
                            <div className="top-main-wor-right">
                                <div className="top-main-wor-star">⭐⭐⭐⭐⭐</div>
                                <span className="top-main-wor-people">  91869人评分</span>
                            </div>
                        </div>
                        <p className="top-main-wor-piao">累计票房</p>
                        <div className="top-main-wor-num">
                            <span style={{ fontSize: '28px' }}>5.03</span>
                            <span>亿</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 中间内容 */}
            <div className="middle-main">

                {/* 中间内容靠左 */}
                <div className="deleft-main">
                    {/* 电影 > 年会不能停！ */}
                    <div>
                        <a>电影 </a>
                        <span> &gt; </span>
                        <span> 年会不能停！</span>
                    </div>
                    {/* 介绍 演员人员 奖项 图集 */}
                    <div className="deleft-main-int">
                        <a  onClick={()=>setDealltext(Refer)}><div>介绍</div></a>
                        <a  onClick={()=>setDealltext(Cast)}><div>演员人员</div></a>
                        <a style={{color:'rgb(218, 218, 218)'}} ><div>奖项</div></a>
                        <a  onClick={()=>setDealltext(Dephotos)}><div>图集</div></a>
                    </div>
                    <hr/>
                    {/* 介绍的内容 */}
                    <div>{dealltext}</div>
                   
                </div>


                {/* 中间内容靠右 */}
                <div className="deright-main">
                    <div className="deright-main-wen" >预告片</div>
                    <div className="deright-main-txt">
                        <ul>
                            {Teaser.map(Teasers=>(
                                <li key={Teasers.id}>
                                <div className="deright-main-txt-all">
                                    {/* 图片 */}
                                    <div className="deright-main-txt-img">
                                        <a href="http://localhost:3000/onehome"><img src={Teasers.src}/></a>
                                    </div>
                                    <div className="deright-main-txt-name">
                                        <div><a>电影《年会不...</a></div>
                                        <div>{Teasers.number}</div>
                                    </div>
                                </div>
                            </li>
                            ))}
                           
                        </ul>
                    </div>
                </div>
            </div>

            {/* 底部版权内容 */}
            <div className="debutton-main"><Buttonzu/></div>
        </div>
    )
}

export default Onehome