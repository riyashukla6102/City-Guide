import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router} from 'react-router-dom';
import {InfoProvider} from './components/context';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
  <InfoProvider>
    <Router>
      < App />
    </Router>
  </InfoProvider>,

  document.getElementById('root')
);


reportWebVitals();
