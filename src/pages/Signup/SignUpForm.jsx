import React, { Component } from 'react'
import api from "../../api"
import classnames from "classnames"
// import { withRouter } from "react-router"
import { withRouter } from 'react-router'  
import {useNavigate} from 'react-router-dom'
import {useHistory} from 'react-router-dom';


 class SignUpForm extends Component {

    
    // 受控组件
    constructor() {
        super();
        this.state = {
            username: "",
            email: "",
            password: "",
            passwordConfirmation: "",
            errors: {}
        }
    }

    onSubmit = (e) => {

        const navigate = useNavigate();  
        e.preventDefault();
        console.log(e.target.name )
        api.register({
            username: this.state.username,
            password: this.state.password,
            email: this.state.email,
            passwordConfirmation: this.state.passwordConfirmation
        }).then(res =>{
            if (res.data.status === 200) {
                // 成功
                console.log(res.data)
                this.props.flashActions.addFlashMessage({
                    id: Math.random().toString().slice(2),
                    msg: res.data.msg,
                    type: "success"
                })
            //     this.setState({
            //         errors:{}
            //     })
            //     // 编程式导航
                // this.props.history.replace("/part1")navigate
                this.props.history.navigate("/part1")
            }
            if (res.data.status === 400) {
                this.setState({
                    errors: res.data.errors
                })
            }
            if (res.data.status === 401) {
                // 失败
                console.log(res.data)

                this.props.flashActions.addFlashMessage({
                    id: Math.random().toString().slice(2),
                    msg: res.data.msg,
                    type: "danger"
                })
            //     this.setState({
            //         errors:{}
            //     })
            }
        }
        ).catch(error => {
            console.log(error)
        })


    }

    changeHandle = (e) => {
        /**
         * ES6：Object扩展
         * Object = {
         *  [key]:value
         * }
         */
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {

        const { username, email, password, passwordConfirmation, errors } = this.state;
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    <h1>管理人员注册</h1>
                        <div className="form-group">
                            <label className="control-label">Username</label>
                            <input
                                className={classnames('form-control', { 'is-invalid': errors.username })}
                                type="text"
                                name="username"
                                value={username}
                                onChange={this.changeHandle}
                            />
                        {errors.username ? <span style={{ color: 'red', fontSize: '10px' }}>{errors.username}</span> : ''}
                        </div>


                        <div>
                            <label className="control-label">Email</label>
                            <input
                                className={classnames('form-control', { 'is-invalid': errors.email })}
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.changeHandle}
                            />
                        {errors.email ? <span style={{ color: 'red', fontSize: '10px' }}>{errors.email}</span> : ''}
                        </div>


                        <div>
                            <label className="control-label">PassWord</label>
                            <input
                                className={classnames('form-control', { 'is-invalid': errors.password })}
                                type="password"
                                name="password"
                                value={password}
                                onChange={this.changeHandle}
                            />
                        {errors.password ? <span style={{ color: 'red', fontSize: '10px' }}>{errors.password}</span> : ''}
                        </div>

                        <div>
                            <label className="control-label">passwordConfirmation</label>
                            <input
                                className={classnames('form-control', { 'is-invalid': errors.passwordConfirmation })}
                                type="password"
                                name="passwordConfirmation"
                                value={passwordConfirmation}
                                onChange={this.changeHandle}
                            />
                        {errors.passwordConfirmation ? <span style={{ color: 'red', fontSize: '10px' }}>{errors.passwordConfirmation}</span> : ''}
                        </div>
                        <div className="form-group">
                        {
                            Object.keys(errors).length > 0 ?
                            <button disabled className="btn btn-primary btn-lg">注册</button>
                            :
                            <button className="btn btn-primary btn-lg">注册</button>
                        }
                        
                    </div>
                </form>

            </div>
        )
    }


}
export default SignUpForm
