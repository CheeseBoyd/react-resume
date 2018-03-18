import React, { Component } from 'react';
import './App.css';
import Homepage from './homepage/Homepage';
import Resume from './resume/Resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// if you want to render components with props
// <Route to={"/stuff"} render={()=>(<SomeComponent someProp={'stuff'}/>)} 
class App extends Component {
  render() {
    return (
      <Router>  
          <div className="App">
              <Switch>
                <Route exact path="/" component={Homepage} />
                <Route exact path="/resume" component={Resume} />
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
