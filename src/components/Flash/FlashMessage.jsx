import React, { Component } from 'react'
import classnames from 'classnames'

export default class FlashMessage extends Component{
    render(){
        return(
            <div 
            className={classnames('alert', {
                "alert-danger": this.props.item.type === 'danger',
                "alert-success": this.props.item.type === 'success',
            })}
            // style={{color:'green',backgroundColor:'#d4e0d4',width:'100%',padding:'10px 20px'}}
            >
                {this.props.item.msg}
            </div>
        )
    }
}