import React, { Component } from 'react';
import {
    Route,
    NavLink,
    HashRouter
  } from 'react-router-dom';
  import Home from './Home';
  import Onemap from './Onemap';
  import Stripe from './Stripe';
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
            <div>
                <h1>React JS Exercise</h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/onemap">Onemap Postal Code</NavLink></li>
                    <li><NavLink to="/stripe">Stripe Payment Gateway</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/onemap" component={Onemap}/>
                    <Route path="/stripe" component={Stripe}/>
                </div>
            </div>
        </HashRouter>
    );
  }
}
 
export default Main;