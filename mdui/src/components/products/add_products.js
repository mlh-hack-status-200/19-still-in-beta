import React, { Component } from 'react';
import '../signup/css/util.css';
import '../signup/css/main.css';
import  {Link} from 'react-router-dom';
import axios from 'axios';

export default class Addpro extends Component {

    constructor(){
        super();

        this.state = {
            product_name: null,
            address_out:null,
            address_in:null,
            weight: null,
            product_code:null
        }
        this.setvalue= this.setvalue.bind(this);
        this.saveData= this.saveData.bind(this);
      }
    componentDidMount(){
      if(localStorage.getItem('Token') === null){
          this.props.history.push('/login');
      }
    }
       setvalue(e){
           console.log(e.target.value);
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    
    saveData(){
        axios.post('http://localhost:8080/prod/add',{
          product_name:this.state.product_name,
           address_out: this.state.address_out,
           address_in: this.state.address_in,
           weight:this.state.weight,
           product_code:this.state.product_code
    
        })
        .then(res => {
          // if(res.data.message === undefined){
          //   alert("order placed successfully");
          // }
          // else{
          //   alert(res.data.message);
          // }
          console.log(res);
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
              
              <span className="login100-form-logo">
                  <i className="zmdi zmdi-landscape" />
                </span>
                <span className="login100-form-title p-b-59">
                  Add products
                </span>
                <div className="wrap-input100 validate-input" data-validate="Product Name is required">
                  <span className="label-input100">Product Name</span>
                  <input  onChange={this.setvalue}  className="input100" id="product_name" type="text" name="product_name" placeholder="Product Name..." />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="address out required">
                  <span className="label-input100">Address_out</span>
                  <input onChange={this.setvalue} className="input100" type="text" id="address_out" name="address_out" placeholder="Address_out" />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="Address_In is required">
                  <span className="label-input100">Address In</span>
                  <input onChange={this.setvalue} className="input100" type="text" id="address_in" name="address_in" placeholder="Address_In" />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="weight is required">
                  <span className="label-input100">weight</span>
                  <input onChange={this.setvalue} className="input100" type="text" id="weight" name="weight" placeholder="weight" />
                  <span className="focus-input100" />
                </div>
                <div className="wrap-input100 validate-input" data-validate="product_code is required">
                  <span className="label-input100">product code</span>
                  <input onChange={this.setvalue} className="input100" type="text" id="product_code" name="product_code" placeholder="product code" />
                  <span className="focus-input100" />
                </div>
                <div className="container-login100-form-btn">
                  <div className="wrap-login100-form-btn">
                    <div className="login100-form-bgbtn" />
                    <button onClick={this.saveData} className="login100-form-btn">
                      Add
                    </button>
                  </div>                  
                  <Link to = "/login" className="dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30 primary">
                    See All products
                    <i className="fa fa-long-arrow-right m-l-5" />
                  </Link>
                </div>
              
            </div>
          </div>
        </div>
            </div>
        )
    }
}



