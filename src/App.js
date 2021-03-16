import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Layouts/NavbarComponent';
import Footer from './components/Layouts/Footer';
//React Router Import
import {Switch, Route} from  'react-router-dom';
//Import Pages
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import NotFoundPage from './components/pages/NotFoundPage';


function App (){
  
    return (
        <>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" >
              <Home />
            </Route>
            <Route path="/news" component = {News}/>
            <Route path="/contacts" component = {Contacts}/>
            <Route path="/details" component = {Details}/>
            <Route  component = {NotFoundPage}/>
          </Switch>
          <Footer />
        </>
    );
  }

export default App;
