import React, { Component } from 'react'

export default class SignUpForm extends Component {

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
        e.preventDefault();
        console.log(e.target.name )


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
                            className='form-control'
                            type="text"
                            name="username"
                            value={username}
                            onChange={this.changeHandle}
                        />

                        <div>
                            <label className="control-label">Email</label>
                            <input
                                className='form-control'
                                type="text"
                                name="email"
                                value={email}
                                onChange={this.changeHandle}
                            />
                        </div>

                        <div>
                            <label className="control-label">PassWord</label>
                            <input
                                className='form-control'
                                type="text"
                                name="password"
                                value={password}
                                onChange={this.changeHandle}
                            />
                        </div>

                        <div>
                            <label className="control-label">passwordConfirmation</label>
                            <input
                                className='form-control'
                                type="text"
                                name="passwordConfirmation"
                                value={passwordConfirmation}
                                onChange={this.changeHandle}
                            />
                        </div>
                    </div>
                </form>

            </div>
        )
    }


}