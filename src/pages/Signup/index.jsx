import React, { Component } from 'react'
import SignUpForm from "./SignUpForm"
import Topbutton from '../../components/Topbutton/index'
import FlashMessageList from '../../components/Flash/FlashMessageList'
import { connect } from 'react-redux'
// import { connect } from "react-redux"
import * as flashActions from "../../actions/flash"
import { bindActionCreators } from "redux"

 class Signup extends Component {
    render() {
        return (
            <div className="row">
                 <Topbutton/>
                 <FlashMessageList/>

                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <SignUpForm flashActions={ this.props.flashActions }/> 
                    {/* <SignUpForm />  */}
                </div>
                <div className="col-md-3"></div>
            </div>
        )
    }
}


const mapDispatchToProps = dispatch =>{
    return{
        flashActions:bindActionCreators(flashActions,dispatch)
    }
}

export default connect(null,mapDispatchToProps)(Signup)