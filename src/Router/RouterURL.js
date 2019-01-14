import React, { Component } from 'react';
import {
  Route,
} from 'react-router-dom'

import Envelope from '../Component/Envelope';

export default class RouterURL extends Component {
    render() {
        return (
        <div>
        <Route exact path="/" component={Envelope}/>
        </div>
        );
    }
}