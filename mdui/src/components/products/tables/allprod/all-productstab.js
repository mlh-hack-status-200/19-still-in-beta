import React, { Component } from 'react';
import "./css/util.css";
import "./css/main.css";
import axios from 'axios';

export default class All_productstab extends Component {
    constructor(){
        super();
        this.state = {
            tabdata : []
        }
    }
    
    componentDidMount(){
        fetch("http://localhost:8080/get/all-products")
        .then(res => res.json())
        .then(json => {
          let data=[]
          for(var i =0;i<json.length;i++){
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

    render() {
        
        return (
            
            <div className="limiter">
        <div className="container-table100">
          <div className="wrap-table100">
            <div className="table100">
                <div><h1 style={{color:"white"}}>Parcels</h1></div>
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
                    {this.state.tabdata.map((data) => {
                        return <tr>
                            <td className="column1">{data.product_name}</td>
                            <td className="column2">{data.product_code}</td>
                            <td className="column3">{data.address_in}</td>
                            <td className="column4">{data.address_out}</td>
                            <td className="column5">{data.weight}</td>
                            <button type="button" className="btn pick">Pick Now</button>
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
