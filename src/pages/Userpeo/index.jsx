import React, { useState } from 'react';
import peostyle from './peo.module.less'
import Pertexts from '../../components/Pertext/indext'

const Userpeo = () => {

  const [color,setColor]=useState(false)
  const [text,setText]=useState(' ')
  

    return (
        <div className={peostyle.all}>

           <div className={peostyle.main}>
            {/* rigmain */}
             <div className={peostyle.rigmain}>
              <h2>个人中心</h2>
              <p
               
               style={{backgroundColor:color?"red":" rgb(221, 221, 221)",
               color:color?"white":"black"
              }}
               onClick={()=>(setColor(!color),setText(Pertexts))}
              //  onChange={()=>setText(Pertexts)}
              >基 础 信 息</p>
              {/* <p>我的订单</p> */}
              
             </div>
            {/* leftmain */}
             <div className={peostyle.leftmain}>
               {text}
               {/* <Pertexts/> */}
             </div>
           </div>

        </div>
    )
}
export default Userpeo