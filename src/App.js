import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Layouts/NavbarComponent';
import Footer from './components/Layouts/Footer';
//React Router Import
import {Switch, Route} from  'react-router-dom';
//Import Pages
import Start from './components/pages/Start';
import Home from './components/pages/Home';
import News from './components/pages/News';
import Contacts from './components/pages/Contacts';
import Details from './components/pages/Details';
import Signup from './components/pages/Signup';
import NotFoundPage from './components/pages/NotFoundPage';


const DefaultContainer= ()=> {
  return(
    <>
      <NavbarComponent />
      <Switch>
      <Route path="/home" component= {Home}/>
      <Route path="/news" component = {News}/>
      <Route path="/contacts" component = {Contacts}/>
      <Route path="/details" component = {Details}/>
      <Route path="/signup" component = {Signup} />
      <Route  component = {NotFoundPage}/>
      </Switch>
      <Footer />
    </>
  )

}
function App (){
  
    return (
        <>
        <Switch>
            <Route exact path="/" >
              <Start />
            </Route>
            <Route component={DefaultContainer} />
            
        </Switch>
        </>
    );
  }

export default App;
