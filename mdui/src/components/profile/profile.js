import React, { Component } from 'react';
import Img01 from './logo192.png'; 
import './profile.css';

export default class Profile extends Component {
constructor(){
    super();

    this.state={
        Name:null
    }
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
                    Marcus Doe
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
                    <div class="row">
                        <div class="col-sm">
                            <h2>ProductName</h2><h3>something</h3><hr/>
                        </div>
                        <div class="col-sm">
                        <h2>ProductName</h2><h3>something</h3><hr/>
                        </div>
                        <div class="col-sm">
                        <h2>ProductName</h2><h3>something</h3><hr/>
                        </div>
                    </div>
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
