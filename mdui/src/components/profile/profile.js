import React, { Component } from 'react';
import Img01 from './logo192.png';
import './profile.css';
import axios from 'axios';
export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      Name: null,
      AllData: [],
      rec_otp: '',
      msg: ''
    }
  }
  componentDidMount() {
    axios.post('http://localhost:8080/get/all-orders', {
      email: localStorage.getItem('Email_Metro')
    })
      .then(res => {
        this.setState({
          AllData: res.data
        })
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  onDeliver = () => {

  }
  onChnage = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  onVerifyRece = (e) => {
    axios.post('http://localhost:8080/prod/rotp', {
      rotp: this.state.rec_otp,
      email: localStorage.getItem('Email_Metro'),
      product_code: e.target.id
    })
      .then(res => {
        console.log(res.data)
        this.setState({
          msg: res.data.msg
        })
      })
      .catch(err => {
        console.log(err)
      })

  }
  onVerifyOder = (e) => {
    axios.post('http://localhost:8080/get/order-delivered-confirmation', {
      product_code: e.target.id
    })
      .then(res => {
        this.setState({
          msg: res.data.msg
        })
        console.log(res.data)
      })
      .catch(err => console.log(err))
  }
  // componentDidMount() {
  //     const name = rememberMe ? localStorage.getItem('user') : '';
  //     console.log()
  //     // this.setState({ Name:  });
  //   }
  render() {
    return (
      <div>
        <div>
          {/*---- Include the above in your HEAD tag --------*/}
          {/*
User Profile Sidebar by @keenthemes
A component of Metronic Theme - #1 Selling Bootstrap 3 Admin Theme in Themeforest: http://j.mp/metronictheme
Licensed under MIT
*/}
          <div className="container">
            <div className="row profile">
              <div className="col-md-3">
                <div className="profile-sidebar">
                  {/* SIDEBAR USERPIC */}
                  <div className="profile-userpic">
                    <img src={Img01} className="img-responsive" alt="" />
                  </div>
                  {/* END SIDEBAR USERPIC */}
                  {/* SIDEBAR USER TITLE */}
                  <div className="profile-usertitle">
                    <div className="profile-usertitle-name">
                      {localStorage.getItem('Name_Metro')}
                    </div>
                    <div className="profile-usertitle-job">
                      Developer
                  </div>
                  </div>
                  {/* END SIDEBAR USER TITLE */}
                  {/* SIDEBAR BUTTONS */}
                  <div className="profile-userbuttons">
                    <button type="button" className="btn btn-success btn-sm">Setting</button>
                    <button type="button" className="btn btn-danger btn-sm">Logout</button>
                  </div>
                  {/* END SIDEBAR BUTTONS */}
                  {/* SIDEBAR MENU */}
                  {/* <div className="profile-usermenu">
                  <ul className="nav">
                    <li className="active">
                      <a href="#">
                        <i className="glyphicon glyphicon-home" />
                        Overview </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="glyphicon glyphicon-user" />
                        Account Settings </a>
                    </li>
                    <li>
                      <a href="#" target="_blank">
                        <i className="glyphicon glyphicon-ok" />
                        Tasks </a>
                    </li>
                    <li>
                      <a href="#">
                        <i className="glyphicon glyphicon-flag" />
                        Help </a>
                    </li>
                  </ul>
                </div>
                {/* END MENU */}
                </div>
              </div> */}
            <div className="col-md-9">
                <div className="profile-content">
                  <h1>Picked Parcels</h1>

                  <div class="container">
                    {
                      this.state.AllData.map((data, index) => (

                        <div class="card" style={{ marginBottom: '20px' }} key={{ index }}>
                          <div class="card-body">
                            <h5 class="card-title">Product Name : {data.product_name}  </h5>
                            <p class="card-text">
                              Otp : {data.dropper_otp}

                            </p>
                            <p>Status : {this.state.msg}</p>
                          </div>
                          <ul class="list-group list-group-flush">
                            <li class="list-group-item">Product Code : {data.product_code}</li>
                            <li class="list-group-item"> From : {data.address_in}</li>
                            <li class="list-group-item"> To : {data.address_out}</li>
                          </ul>





                          <input type="text" class="form-control" onChange={this.onChnage} id="rec_otp" placeholder="Receiver OTP" />

                          <button type="submit" id={data.product_code} onClick={this.onVerifyRece} class="btn btn-primary mb-2">Deliver</button>
                          <button type="submit" id={data.product_code} onClick={this.onVerifyOder} class="btn btn-success mb-2">Verify</button>

                        </div>

                      ))
                    }

                  </div>
                </div>
              </div>
            </div>
          </div>

          <br />
          <br />
        </div>
      </div>
    )
  }
}
