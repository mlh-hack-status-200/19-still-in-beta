import React, { Component } from 'react';
import './Logincss/util.css';
import './Logincss/main.css';
import axios from 'axios';

export default class Login extends Component {

    
    constructor(){
        super();

        this.state = {
            email:null,
            password: null
        }
        this.setvalue= this.setvalue.bind(this);
    
      }
    
       setvalue(e){
           console.log(e.target.value);
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    

        doLogin = () =>{
          axios.post('http://localhost:8080/auth/login',{
            email: this.state.email,
            password:this.state.password
     
         })
         .then(res => {
           if(res.data.token){
             localStorage.setItem('Token',res.data.token)
             console.log(res.data);
             this.props.history.push('/');
           }
           
          
         })
         .catch(err => {
             console.log(err);
         })
        }
    render() {
        return (
            <div>
            <div className="limiter">
          <div className="container-login100" style={{backgroundImage: 'url("images/bg-01.jpg")'}}>
            <div className="wrap-login100">
             
                <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape" />
                </span>
                <span className="login100-form-title p-b-34 p-t-27">
                  Log in
                </span>
                <div className="wrap-input100 validate-input" data-validate="Enter username">
                  <input onChange={this.setvalue} id="email" className="input100" type="text" name="username" placeholder="Username" />
                  <span className="focus-input100" data-placeholder="" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Enter password">
                  <input onChange={this.setvalue} id="password" className="input100" type="password" name="pass" placeholder="Password" />
                  <span className="focus-input100" data-placeholder="" />
                </div>
                <div className="contact100-form-checkbox">
                  <input className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                  <label className="label-checkbox100" htmlFor="ckb1">
                    Remember me
                  </label>
                </div>
                <div className="container-login100-form-btn">
                  <button onClick={this.doLogin} className="login100-form-btn">
                    Login
                  </button>
                </div>
                <div className="text-center p-t-90">
                  <a className="txt1" href="#">
                    Forgot Password?
                  </a>
                </div>
             
            </div>
          </div>
        </div>
       

            </div>
        )
    }
}
