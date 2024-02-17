import {React,useState} from 'react'
import "./home.less"
import Swiper from '../../components/Swiper'
import Banner1 from '../../assets/images/banner1.png'
import Banner2 from '../../assets/images/banner2.png'
import Banner3 from '../../assets/images/banner3.png'
import data from './data/data.json'
import updata from './data/updata.json'
import soudata from './data/soudata.json'
import today from './data/today.json'
import expect from './data/expect.json'
import topdata from './data/topdata.json'
import Buttonzu from '../../components/Buttonzu/index'
// import Searchmain from '../Searchmain'
import { NavLink } from "react-router-dom";

// import onehome from '../detail/onehome'

const Home = () => {
    // const [data, setData] = useState(require('./data.json'))
    // 年会不能停！的详情页
    const onehandleClick = () => {  
        window.location.href = 'http://localhost:3000/#/onehome'; 
        
      };  
    
      
    return (
        <div>
            
            {/* 搜索框 */}
            <HomeSearch />
            {/* 电影轮播图 */}
            <div className='left-main'>
                <div id='swiper-home'>
                    <p
                        style={{ fontSize: '30px', color: 'crimson' }}
                    ><strong>精彩电影</strong></p><br />
                    <Swiper banners={[Banner1, Banner2, Banner3]}

                    />
                </div>
            </div>

            {/* 左边内容 */}
            <div className='film-source'>



                {/* 正在热映 */}
                <div>
                    <p
                        style={{ fontSize: '25px', color: 'red' }}
                    ><strong>正在热映（102部）</strong></p><br />

                    <ul className='film-source-list'>
                        <li ><div className='film-source-all' onChange={onehandleClick}>
                            {/* 图片 */}
                            <a href='http://localhost:3000/#/onehome'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src='https://p0.pipi.cn/mmdb/fb73862f2ffc7eb860f2aab62cb4a844c40f0.jpg?imageView2/1/w/160/h/220' />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>年会不能停！</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    9.0
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                        {data.map(Objects => (
                            // <div key={key}>{key}: {data[key]}</div>
                            <li key={Objects.id}>
                                <div className='film-source-all'>
                            {/* 图片 */}
                            <a href='#'>
                                <div >
                                    <img
                                        className='film-source-img'
                                        src={Objects.src} />
                                </div>

                                {/* 名称 */}
                                <div className='film-source-name'>
                                    <strong>{Objects.name}</strong>
                                </div>
                                {/* 评分 */}
                                <div className='film-source-score'>
                                    {Objects.score}
                                </div>
                            </a>
                            {/* 购票：点击会红 */}
                            <div id='film-source-ticket'>
                                <a href="/cinemas?movieId=1461561" target="_blank" >
                                    购  票
                                </a>
                            </div>

                        </div></li>
                            
                        ))}
                    </ul>
                </div>

                {/* 即将上映 */}
                <div className='film-up'>
                    <p style={{ fontSize: '25px', color: 'skyblue' }}
                    ><strong>即将上映（109部）</strong></p><br />
                    {/* 内容 */}

                    <ul className='film-up-list'>

                        <li>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src='https://p0.pipi.cn/mmdb/fb73862f7a32ff0e13338f51b1fb31279ac9c.jpg?imageView2/1/w/218/h/300' />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>时光之子</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    2112人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>

                                    <div className='film-up-future-p'>
                                        <a className='film-up-future-p-a'>预告片</a>
                                    </div>

                                    <div className='film-up-future-in'>
                                        <a className='film-up-future-in-a'>预告</a>
                                    </div>

                                </div>

                            </div><br />
                            <div className='film-up-time'>1月5日上映</div>
                        </li>
                        {updata.map(updatas=>(
                            <li key={updatas.id}>
                            <div className='film-up-all'>
                                {/* 图片 */}
                                <a href='#'>
                                    <div >
                                        <img
                                            className='film-up-img'
                                            src={updatas.src} />
                                    </div>

                                    {/* 名称 */}
                                    <div className='film-up-name'>
                                        <strong>{updatas.name}</strong>
                                    </div>
                                </a>

                                {/* 想看人数 */}
                                <div className='film-up-people'>
                                    {updatas.people}人想看
                                </div>

                                {/* 预告片、预告 */}
                                <div className='film-up-future'>

                                    <div className='film-up-future-p'>
                                        <a className='film-up-future-p-a'>预告片</a>
                                    </div>

                                    <div className='film-up-future-in'>
                                        <a className='film-up-future-in-a'>预告</a>
                                    </div>

                                </div>

                            </div><br />
                            <div className='film-up-time'>{updatas.time}上映</div>
                        </li>
                        ))}

                        
                    </ul>

                </div><br />
                <div>

                    {/* 第三部分影视片 */}
                    <div>
                        <ul className='film-sources-list'>
                            {/* long */}
                            <li style={{ width: "341px" }}>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                style={{ width: "341px" }}
                                                className='film-sources-img'
                                                src='https://p0.meituan.net/movie/9bf6ede4308db272cd699d82e7d487a853438.jpg@350w_220h_1e_1c' />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>夏洛特烦恼</strong>
                                        </div>
                                        {/* 评分 */}
                                        <div className='film-sources-score'
                                            style={{ transform: "translate3d(316px, -50px, 0px)" }}
                                        >
                                            9.0
                                        </div>
                                    </a>
                                </div>
                            </li>
                            {/* short */}
                            <li>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                className='film-sources-img'
                                                src='https://p0.pipi.cn/mmdb/d2dad592b12f2ab12d339e7ef5bd56a01e21d.jpg?imageView2/1/w/160/h/220' />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>夏洛特烦恼</strong>
                                        </div>
                                        {/* 评分 */}
                                        <div className='film-sources-score'>
                                            9.0
                                        </div>
                                    </a>
                                </div>
                            </li>
                            {soudata.map(soudatas=>(
                                <li key={soudatas.id}>
                                <div className='film-sources-all'>
                                    {/* 图片 */}
                                    <a href='#'>
                                        <div >
                                            <img
                                                className='film-sources-img'
                                                src={soudatas.src} />
                                        </div>

                                        {/* 名称 */}
                                        <div className='film-sources-name'>
                                            <strong>{soudatas.name}</strong>
                                        </div>
                                        {/* 评分 */}
                                        <div className='film-sources-score'>
                                            {soudatas.source}
                                        </div>
                                    </a>
                                </div>
                            </li>
                            ))}
                        </ul>

                    </div>
                </div>
            </div>


            {/* 右边内容 */}
            <div className='right-main'>
                {/* 图片 */}
                <div className='right-main-logo'>

                </div>
                {/* 今日票房 */}
                <div className='today-ticket'>
                    <p style={{ color: 'red', fontSize: '30px', margin: '25px 0px' }}>今日票房</p>
                    <ul>
                        {/* 1 */}
                        <li className='today-ticket-one'>
                            <a href='#'>
                                <div className='today-ticket-photo'>
                                    <img src='https://p0.pipi.cn/friday/1709606769068a4e346864b11b696d02.jpg?imageView2/1/w/120/h/80' />
                                </div>
                                <div className='today-ticket-name'>
                                    <span className='today-ticket-name-zi'>年会不能停！</span>
                                    <br />

                                    <p className='today-ticket-name-number'>12312万</p>
                                </div>
                            </a>
                        </li>
                        {/* 2 */}
                        <li className='today-ticket-two'>
                            <a>
                                <span>
                                    <i className='today-ticket-two-i'>2</i>
                                    <span className='today-ticket-two-name'>金手指</span>
                                    <span className='today-ticket-two-number'>122万</span>
                                </span>
                            </a>
                        </li>
                        { today.map(todays=>(
                            <li className='today-ticket-two' key={todays.id}>
                            <a>
                                <span>
                                    <i className='today-ticket-two-i'>{todays.i}</i>
                                    <span className='today-ticket-two-name'>{todays.name}</span>
                                    <span className='today-ticket-two-number'>{todays.number}万</span>
                                </span>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>

                {/* 最受期待 */}
                <div className='expect-ticket'>
                    <p style={{ color: '#d1c08d', fontSize: '30px', margin: '25px 0px' }}>最受期待</p>
                    <div>
                        <ul>
                            {/* 1 */}
                            <li className='expect-ticket-one'>
                                <a href='#'>
                                    <div className='expect-ticket-photo'>
                                        <img src='https://p0.pipi.cn/mmdb/fb73862f8eaf2ac69621f0befccf7a5f5f8b4.jpg?imageView2/1/w/140/h/194' />
                                    </div>
                                    <div className='expect-ticket-name'>
                                        <span className='expect-ticket-name-zi'>熊出没</span>
                                        <br />
                                        <p className='expect-ticket-name-time'>上映时间：2024年4月22号</p>
                                        <p className='expect-ticket-name-number'>12312万人想看</p>
                                    </div>
                                </a>
                            </li><br />

                            {/* 2 */}
                            <li className='expect-ticket-two' style={{ "width": "170px"}}>
                                <a href='#'>
                                    <div className='expect-ticket-two-photo'>
                                        <img src='https://p0.meituan.net/mmc/f5523879ec43bdcbda484c5f0e7cf3262776.png@170w_118h_1e_1c' />
                                    </div>
                                    <div className='expect-ticket-two-name'>
                                        <span className='expect-ticket-two-name-zi'>飞驰人生</span>
                                        <p className='expect-ticket-two-number'>12312万人想看</p>
                                    </div>
                                </a>
                            </li>
                            <li className='expect-ticket-two-r' style={{ "width": "170px"}} >
                                <a href='#'>
                                    <div className='expect-ticket-two-photo'>
                                        <img src='https://p0.meituan.net/mmc/f5523879ec43bdcbda484c5f0e7cf3262776.png@170w_118h_1e_1c' />
                                    </div>
                                    <div className='expect-ticket-two-name'>
                                        <span className='expect-ticket-two-name-zi'>飞驰人生</span>
                                        <p className='expect-ticket-two-number'>12312万人想看</p>
                                    </div>
                                </a>
                            </li>
                            <br />

                            {/* 3 */}
                            <li className='expect-ticket-three' >
                                <a>
                                    <span>
                                        <i className='expect-ticket-three-i'>4</i>
                                        <span className='expect-ticket-three-name'>年会不能停！</span>
                                        <span className='expect-ticket-three-number'>122万人想看</span>
                                    </span>
                                </a>
                            </li>
                            {expect.map(expects=>(
                                <li className='expect-ticket-three' key={expects.id}>
                                <a>
                                    <span>
                                        <i className='expect-ticket-three-i'>{expects.i}</i>
                                        <span className='expect-ticket-three-name'>{expects.name}</span>
                                        <span className='expect-ticket-three-number'>{expects.number}万人想看</span>
                                    </span>
                                </a>
                            </li>
                            ))}



                        </ul>
                    </div>
                </div>

                {/* 排行榜 */}
                <div className='top-ticket'>
                    <p style={{ color: '#d1c08d', fontSize: '30px' }}>TOP 100</p>
                    <ul>
                        {/* 1 */}
                        <li className='top-ticket-one'>
                            <a href='#'>
                                <div className='top-ticket-photo'>
                                    <img src='https://p0.meituan.net/movie/574c998b534c4354e46e8c0cf89ca76037249.jpg@120w_80h_1e_1c' />
                                </div>
                                <div className='top-ticket-name'>
                                    <span className='top-ticket-name-zi'>我不是药神先生</span>
                                    <br />

                                    <p className='top-ticket-name-number'>9.6分</p>
                                </div>
                            </a>
                        </li>
                        {/* 2 */}
                        
                        {topdata.map(topdatas=>(
                            <li className='top-ticket-two' key={topdatas.id}>
                            <a>
                                <span>
                                    <i className='top-ticket-two-i'>{topdatas.i}</i>
                                    <span className='top-ticket-two-name'>{topdatas.name}</span>
                                    <span className='top-ticket-two-number'>{topdatas.number}分</span>
                                </span>
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}
function HomeSearch() {
    const onSearchmain = () => {  
        window.location.href = 'http://localhost:3000/?#/searchmain ';
      };  
    return (
        <div className='HomeSearch'>
            <div ><img className='home-search-tu'
                src='https://tse4-mm.cn.bing.net/th/id/OIP-C.dBr7MmPncuvzT0NLXUwm2wAAAA?w=161&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'

            /></div>
            <div onClick={onSearchmain}>
                <form >
                    <input
                        placeholder='搜索'
                        className='home-search'
                    />
                    
                </form>
            </div>
            <div id='homedi'><Buttonzu/></div>
        </div>
    )
}


export default Home