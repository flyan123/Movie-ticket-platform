import React from "react"
import Person from '../people.json'
import "./refer.less"
const Refer = () =>{
    return (
        <div>
            {/* 介绍 */}
            <div className="deleft-main-int-con" >
                        {/* 剧情简介 */}
                        <div className="deleft-main-int-con-one">
                            <div className="deleft-main-int-con-one-value">剧情简介</div>
                            <div>
                                <p>
                                    口碑炸了，全国都已对齐颗粒度！开年爆笑国产喜剧，谁看谁笑疯！从头笑到尾，快乐不能停！钳工胡建林 (大鹏 饰)在集团裁员之际阴差阳错被调入总部，裹挟在“错调”事件中的人事经理马杰 (白客 饰) 为保饭碗被迫为其隐瞒四处周旋。从“工厂”到“大厂”，从“蓝领”变“金领”，胡建林因与大厂环境格格不入而笑料百出，也像一面“职场照妖镜”照出职场众生相......胡建林为何能在裁员之际一路升职加薪制霸大厂？马杰又能否在“错调”事件中全身而退？这场离谱的“错调”背后又隐藏着什么惊天大瓜……
                                </p>
                            </div>
                        </div>
                        {/* 演员人员 */}
                        <div className="deleft-main-int-con-two">
                            <div className="deleft-main-int-con-two-value">演员人员</div>
                            {/* 导演 */}
                            <div>
                                <div style={{"margin":"6px 0px"}}>导演</div>
                                <ul>
                                    <li>
                                        {/* 导演图片 */}
                                        <img src="https://p0.pipi.cn/basicdata/fb73862fc69f2a8ea306d620fb1f9beda0667.jpg?imageView2/1/w/128/h/170" />
                                        {/* 导演名字 */}
                                        <div>董润年</div>
                                    </li>
                                </ul>
                            </div>
                            {/* 演员 */}
                            <div className="deleft-main-int-con-two-act" >
                                <div style={{"margin":"6px 0px"}}>演员</div>
                                <ul>
                                    <li>
                                        <img src="https://p0.pipi.cn/basicdata/25bfd6d7537e7acf3e57e23b4b7a55905592c.jpg?imageView2/1/w/128/h/170"/>
                                        <div>大鹏</div>
                                        <div>饰：胡建林</div>
                                    </li>
                                    
                                    {Person.map(Persons=>(
                                        <li key={Persons.id}>
                                        <img src={Persons.src}/>
                                        <div>{Persons.name}</div>
                                        <div>饰：{Persons.names}</div>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div >
                        {/* 图集 */}
                        <div className="deleft-main-int-con-three">
                            <div>图集</div>
                            <img src="https://p0.pipi.cn/friday/1709606769068a4e346864b11b696d02.jpg?imageView2/1/w/465/h/258"/>
                        </div>
                        {/* 影片资料 */}
                        <div className="deleft-main-int-con-four">
                            <div>影片资料</div>
                            <div className="deleft-main-int-con-four-tet">
                                <div className="deleft-main-int-con-four-c">
                                    <div>出品发行</div>
                                    <div style={{"color":"#7f7f7f58"}}>北京嘉映春天影业有限公司</div>
                                </div>
                                <div className="deleft-main-int-con-four-j">
                                    <div>技术参数</div>
                                    <div style={{"color":"#7f7f7f58"}}>1小时57分钟</div>
                                </div>
                            </div>

                        </div>

                        {/* 票房 */}
                        <div className="deleft-main-int-con-five">
                            <div>票房</div>
                            <div className="deleft-main-int-con-five-all">
                                <div className="deleft">
                                    <div>1</div>
                                    <div>昨日排名</div>
                                </div>
                                <div className="deleft">
                                    <div>18580</div>
                                    <div>首周房票(万)</div>
                                </div>
                                <div className="deleft">
                                    <div>55736</div>
                                    <div>累计房票(万)</div>
                                </div>
                            </div>
                            
                        </div>
                        
                    </div>
        </div>
    )
}

export default Refer