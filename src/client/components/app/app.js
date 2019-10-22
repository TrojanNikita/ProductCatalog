import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

import Header from '../header';
import CategoryList from '../category-list';
import Home from '../home';
import Products from '../products';
import LogIn from '../login';
import SignUp from '../signup';

import './global.css';
import './app.css';

export default class App extends React.Component{




  render(){

        return (

          <div className="app">

            <Router>
            <div >
                  <Header/>
                  <Route exact path="/" component={Home}/>
                  <Route exact path="/category" component={CategoryList}/>
                  <Route exact path="/products" component={Products}/>
                  <Route exact path="/login" component={LogIn}/>
                  <Route exact path="/signup" component={SignUp}/>
            </div>
            </Router>
          </div>
        );
      }
}
