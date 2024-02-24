import React,{Component}  from "react";
import api from '../../api/index'

export default  class Signup extends Component{
// 受控组件
  constructor(){
    super();
    this.state={
      username:'',
      password:'',
      confirm:'',
      email:'',
    }
  }

  onSubmit=(e)=>{
    e.preventDefault();
    // console.log(this.state)
    api.register(
      {
        username:this.state.username,
        password:this.state.password,
        confirm:this.state.confirm,
        email:this.state.email,
      }
    ).then(res=>{
      console.log(res.data)
    }).catch(error=>{
      console.log(error)
    })
  }
  changeHandle=(e)=>{

    this.setState({[e.target.name]:e.target.value})
  }

  render(){
    const{ username,password,confirm,email}=this.state

    return(
      <div>
        <div>
          <form onSubmit={this.onSubmit}>
            <h1>管理员注册</h1>
            {/*  */}
            <div>
              <label >用户名</label>
              <input
                type="text"
                name="username"
                value={username}
                onChange={this.changeHandle}
              />
            </div>
            {/*  */}
            <div>
              <label >密码</label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.changeHandle}
              />
            </div>
            {/*  */}
            <div>
              <label >确认密码</label>
              <input
                type="password"
                name="confirm"
                value={confirm}
                onChange={this.changeHandle}
              />
            </div>
            {/*  */}
            <div>
              <label >电子邮件</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={this.changeHandle}
              />
            </div>
            {/*  */}
            <div>
              <button>注册</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}