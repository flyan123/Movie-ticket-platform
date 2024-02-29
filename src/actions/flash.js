import { ADD_FLASH,DEL_FLASH } from "../constants"

export function addFlashMessage(message){
    return{
        type:"addFlash",  
        message
    }
}

export function delFlashMessage(){
    return{
        type:"delFlash",
        
    }
}