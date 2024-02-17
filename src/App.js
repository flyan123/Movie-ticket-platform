import React from 'react';
// 组件引入
// import { Button, Flex } from 'antd';
// 自己的组件引入
import Loginto from '../src/pages/Login/index'
// import Topbutton from './components/Topbutton/index'
// 图标引入
// import {UpCircleOutlined} from '@ant-design/icons'
// 新路由引入
import {useRoutes,Link} from 'react-router-dom'


// import Home from './pages/Home';
import routes from './router/index';




const App = () => {
  // const  outlet = useRoutes(routes)
  
  return(
    <div>
      <Loginto />

      {/* <Link to='/home'>Home</Link> */}
      
{/* 头部组件 */}
      {/* <Topbutton/> */}
{/* 主要内容 */}
      {/* {outlet} */}


   </div>
  )
  };
export default App;
