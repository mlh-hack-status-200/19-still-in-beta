import React, { Component } from 'react';
import "./css/util.css";
import "./css/main.css";
import axios from 'axios';

export default class All_productstab extends Component {
  constructor() {
    super();
    this.state = {
      tabdata: [],
      Alert: null
    }
  }

  componentDidMount() {
    fetch("http://localhost:8080/get/all-products")
      .then(res => res.json())
      .then(json => {
        let data = []
        for (var i = 0; i < json.length; i++) {
          data.push(json[i])
        }

        this.setState({
          tabdata: data
        })
        console.log(this.state.tabdata)
      })
      .catch(err => {
        console.log(err);
      })

  }
  pickOrder = (e) => {
    axios.post('http://localhost:8080/prod/code', {
      product_code: e.target.id,
      email: localStorage.getItem('Email_Metro')
    })
      .then(res => {
        console.log(res.data);
        this.setState({
          Alert: <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Hurray !!</strong> <p>You picked up your Order - ID : {res.data.product_code}.</p>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
        })
        this.props.history.push('/profile');

      })
      .catch(err => console.log(err))
  }

  render() {

    return (

      <div className="limiter">
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100">
              <div>
                <nav class="navbar navbar-expand-lg navbar-light" style={{ background: 'transparent', marginBottom: '20px' }}>
                  <a class="navbar-brand" href="#" style={{ color: '#fff' }}>Metro Co.</a>
                  <button class="navbar-toggler" style={{ color: '#fff' }} type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>

                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                      <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                      </li>
                      <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          Dropdown
        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">Action</a>
                          <a class="dropdown-item" href="#">Another action</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                      </li>
                    </ul>

                  </div>
                </nav>
                {
                  this.state.Alert
                }
              </div>
              <table>
                <thead>
                  <tr className="table100-head">
                    <th className="column1">Product Name</th>
                    <th className="column2">product_code</th>
                    <th className="column3">Address_in</th>
                    <th className="column4">Address_out</th>
                    <th className="column5">Weight</th>
                    <th className="column6">Pick it</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.tabdata.map((data, index) => {
                    return <tr key={index} >
                      <td className="column1">{data.product_name}</td>
                      <td className="column2">{data.product_code}</td>
                      <td className="column3">{data.address_in}</td>
                      <td className="column4">{data.address_out}</td>
                      <td className="column5">{data.weight}</td>
                      <button type="button" id={data.product_code} className="btn pick" onClick={this.pickOrder}>Pick Now</button>
                    </tr>

                  })}

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
