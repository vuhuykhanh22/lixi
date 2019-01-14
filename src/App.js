import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {Image} from 'react-bootstrap';
import {
  BrowserRouter as Router,
} from 'react-router-dom'
import Envelope from './Component/Envelope';
class App extends Component {

  render() {
    return (
      <Router>
      <div className='ui-layout'>
      <div className='ui-logo text-center'>
      <Image src={require('./Images/firework.gif') } className='firework'/>
      <Image src={require('./Images/firework.gif') } className='firework right'/>
      </div>
        <div className='ui-title text-center pt-5 mb-5'>
           <h2>CHÚC MỪNG NĂM MỚI</h2>
           <h3>Bao Lì Xì May Mắn</h3>
        </div>
        <div className='ui-content'>
        <div className='container'>
        <div className='row'>
          <Envelope/>
          <Envelope/>
          <Envelope/>
          <Envelope/>
          <Envelope/>
          <Envelope/>
          <Envelope/>
          <Envelope/>
        </div>
        </div>
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
