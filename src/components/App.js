import React, { Component } from 'react';
import './App.css';
import Homepage from './homepage/Homepage';
import Resume from './resume/Resume';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>  
          <div className="App">
              <Switch>
                <Route exact={true} path="/" component={Homepage} />
                <Route exact={true} path="/resume" component={Resume} />
              </Switch>
          </div>
      </Router>
    );
  }
}

export default App;
