/**
 * flash = {
 *  msg:"注册成功"
 *  id:1001
 * }
 */

import findIndex from "lodash/findIndex"
// import { ADD_FLASH,DEL_FLASH } from "../constants"

const flashState = [
{
    id:1001,
    msg:"提示信息",
    type:'success'
}
]

const flash = (state = flashState,action) =>{
    switch(action.type){
        // case ADD_FLASH:
        case "addFlash":
            return [
                ...state,
                action.message
            ]
        // case DEL_FLASH:
        case "delFlash":
// 删除事件
            let currentIndex = findIndex(state,(item) => item.id === action.id)
            // return state;
            return [
                ...state.slice(0,currentIndex),
                ...state.slice(currentIndex+1)
            ];
        default:
            return state;
    }
}

export default flash