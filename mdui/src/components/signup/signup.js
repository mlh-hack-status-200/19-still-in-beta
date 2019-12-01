import React, { Component } from 'react';
import './css/util.css';
import './css/main.css';
import  {Link} from 'react-router-dom';
import axios from 'axios';

export default class Signup extends Component {

    constructor(){
        super();
        this.state = {
            name: null,
            email:null,
            username:null,
            password: null
        }
        this.setvalue= this.setvalue.bind(this);
        this.saveData= this.saveData.bind(this);
      }
    
       setvalue(e){
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    
    saveData(){
        axios.post('http://localhost:8080/auth/register',{
           name:this.state.name,
           email: this.state.email,
           username: this.state.username,
           password:this.state.password
        })
        .then(res => { 
          console.log(res)       
          if(res.data.message === undefined){
            alert("order placed successfully");
          }
          else{
            alert(res.data.message);
          }
          this.history.push('/login')
        })
        .catch(err => {
            console.log(err);
        })
        }
    
    render() {
        return (
            <div>
            <div className="limiter">
          <div className="container-login100">
            <div className="login100-more" style={{backgroundImage: 'url("images/bg-01.jpg")'}} />
            <div className="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
              <form className="login100-form validate-form">
              <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape" />
                </span>
                <span className="login100-form-title p-b-59">
                  Sign Up
                </span>
                <div className="wrap-input100 validate-input" data-validate="Name is required">
                  <span className="label-input100">Full Name</span>
                  <input  onChange={this.setvalue}  className="input100" id="name" type="text" name="name" placeholder="Name..." />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Valid email is required: ex@abc.xyz">
                  <span className="label-input100">Email</span>
                  <input onChange={this.setvalue} className="input100" type="text" id="email" name="email" placeholder="Email addess..." />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Username is required">
                  <span className="label-input100">Username</span>
                  <input onChange={this.setvalue} className="input100" type="text" id="username" name="username" placeholder="Username..." />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Password is required">
                  <span className="label-input100">Password</span>
                  <input onChange={this.setvalue} className="input100" type="password" id="password" name="pass" placeholder="*************" />
                  <span className="focus-input100" />
                </div>
                <div className="flex-m w-full p-b-33">
                  <div className="contact100-form-checkbox">
                    <input onChange={this.setvalue} className="input-checkbox100" id="ckb1" type="checkbox" name="remember-me" />
                    <label className="label-checkbox100" htmlFor="ckb1">
                      <span className="txt1">
                        I agree to the
                        <a href="#" className="txt2 hov1">
                          Terms of User
                        </a>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button onClick={this.saveData} className="login100-form-btn">
                      Sign Up
                    </button>
                  </div>                  
                  <Link to = "/login" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30 primary">
                    Sign in
                    <i className="fa fa-long-arrow-right m-l-5" />
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
            </div>
        )
    }
}



