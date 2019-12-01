import React from 'react';
import './App.css';
import {BrowserRouter, Link, Route}  from 'react-router-dom';
import Signup from './components/signup/signup';
import Login from './components/signup/login/login';
import Addpro from './components/products/add_products';
import All_productstab from './components/products/tables/allprod/all-productstab';
import Profile from './components/profile/profile';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Route exact path = "/Addpro" component = {Addpro} />
        <Route exact path = "/login" component = {Login}/>
        <Route exact path = "/" component = {Signup}/>
        <Route exact path = "/Allprotab" component = {All_productstab}/>
        <Route exact path = "/Profile" component = {Profile}/>

      
     
     
     
      </BrowserRouter>
    </div>
  );
}

export default App;
