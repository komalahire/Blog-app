import React, { Component } from "react";
import { Route } from "react-router-dom";

import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import Blog from './components/info/Blog';
import Card from './components/info/Card';


class App extends Component {
  render() {
    return (
     
        <div className="App">
           {/* <Card/>  */}
          {/* <Blog/> */}
          <Route exact path="/" component={Landing} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path = '/blog' component = {Blog}/>
          <Route exact path = '/card' component = {Card}/>
        </div>
    
    );
  }
}
export default App;