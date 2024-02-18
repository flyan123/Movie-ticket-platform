// 配置懒加载lazy
import React,{lazy} from "react";

// Navigate重定向组件
import { Navigate } from "react-router-dom";


// 首页
const   Home =lazy(()=>import("../pages/Home/index"))
// 电影
const Shop =lazy(()=>import("../pages/Shop/index"))
// 影院
const Cinema =lazy(()=>import("../pages/Cinema/index"))
// 演出
const Actout =lazy(()=>import("../pages/Actout/index"))
// 用户登入
const User =lazy(()=>import("../pages/User/index"))
// 用户注册
const Register =lazy(()=>import("../pages/User/Register/index"))
// 用户详情页
const Userpeo =lazy(()=>import("../pages/Userpeo/index"))

// 正在热映 即将上映 经典影片
const ClaFil =lazy(()=>import("../pages/Shop/Shopye/ClaFil"))
const NowFil =lazy(()=>import("../pages/Shop/Shopye/NowFil"))
const UpFil =lazy(()=>import("../pages/Shop/Shopye/UpFil"))

// 分类：爱情 喜剧 动画片
const LoveCla =lazy(()=>import("../pages/Shop/Shopyedif/LoveCla"))
const Comedy =lazy(()=>import("../pages/Shop/Shopyedif/Comedy"))
const Cartoon =lazy(()=>import("../pages/Shop/Shopyedif/Cartoon"))

// 年会不能停详情页
const Onehome =lazy(()=>import("../pages/detail/onehome"))

// 搜索框跳转
const Searchmain =lazy(()=>import("../pages/Searchmain/index"))


// 后台的路由
// 首页
const Hhome =lazy(()=>import("../pages/Hhome/index"))
const Part1 =lazy(()=>import("../pages/Part/part1"))
const Part2 =lazy(()=>import("../pages/Part/part2"))
const Part301 =lazy(()=>import("../pages/Part/Part3/part301"))
const Part302 =lazy(()=>import("../pages/Part/Part3/part302"))
const Part303 =lazy(()=>import("../pages/Part/Part3/part303"))
const Part401 =lazy(()=>import("../pages/Part/Part4/part401"))
const Part402 =lazy(()=>import("../pages/Part/Part4/part402"))
const Part5 =lazy(()=>import("../pages/Part/part5"))
const Loginto =lazy(()=>import("../pages/Login/index"))
const Signup =lazy(()=>import("../pages/Signup/index"))


// 封装函数
const withLoadingComponent=(comp)=>(
    <React.Suspense fallback={<div>Loading...</div>}>
        {comp}
    </React.Suspense>   
)

// 新路由写法
const routes = [
    {
        path:'/',
        element:withLoadingComponent(<Home/>)
    },{
        path:'/shop',
        element:withLoadingComponent(<Shop/>)
    },{
        path:'/cinema',
        element:withLoadingComponent(<Cinema/>)
    },{
        path:'/actout',
        element:withLoadingComponent(<Actout/>)
    },{
        path:'/user',
        element:withLoadingComponent(<User/>)
    },
    {
        path:'/clafil',
        element:withLoadingComponent(<ClaFil/>)
    },{
        path:'/nowfil',
        element:withLoadingComponent(<NowFil/>)
    },{
        path:'/upfil',
        element:withLoadingComponent(<UpFil/>)
    },{
        path:'/lovecla',
        element:withLoadingComponent(<LoveCla/>)
    },{
        path:'/comedy',
        element:withLoadingComponent(<Comedy/>)
    },{
        path:'/cartoon',
        element:withLoadingComponent(<Cartoon/>)
    },
    {
        path:'/register',
        element:withLoadingComponent(<Register/>)
    },
    {
        path:'/userpeo',
        element:withLoadingComponent(<Userpeo/>)
    },
    {
        path:'/onehome',
        element:withLoadingComponent(<Onehome/>)
    },
    {
        path:'/searchmain',
        element:withLoadingComponent(<Searchmain/>)
    },

// 后台管理系统的
{
    path:'/',
    element:withLoadingComponent(<Navigate to='/part1' />)
},
{
    path:'/',
    element:withLoadingComponent(<Hhome />),
    // 目录下的路由
    children:[
    {
        path:'/part1',
        element:withLoadingComponent(<Part1 />)
    }, {
        path:'/part2',
        element:withLoadingComponent(<Part2 />)
    },{
        path:'/part3/part301',
        element:withLoadingComponent(<Part301 />)
    },{
        path:'/part3/part302',
        element:withLoadingComponent(<Part302 />)
    },{
        path:'/part3/part303',
        element:withLoadingComponent(<Part303/>)
    },{
        path:'/part4/part401',
        element:withLoadingComponent(<Part401/>)
    },{
        path:'/part4/part402',
        element:withLoadingComponent(<Part402/>)
    },{
        path:'/part5',
        element:withLoadingComponent(<Part5/>)
    },
]
},
{
    path:'*',
    element:withLoadingComponent(<Navigate to='/part1' />)
},
{
    path:'/loginto',
    element:withLoadingComponent(<Loginto/>)
}, 
{
    path:'/signup',
    element:withLoadingComponent(<Signup/>)
},
]

export default routes

