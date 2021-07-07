import { BrowserRouter as Router, NavLink,} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import React, { Component } from 'react';
import Project from './Components.js/Projects';
class App extends Component {
    render() {
      return (
        <Router>
          <div className="App">
          <ul>
          <NavLink to="/" exact activeStyle={{ color:'green' }}>Refresh</NavLink>
              &nbsp;  &nbsp;  &nbsp;
              <NavLink to="/Project" exact strict  activeStyle={{ color:'green' }}>Projects</NavLink>
            </ul>
          <Route path="/" exact strict render={
            () => {
              return ( <div><h1>Welcome To My page</h1><h4>Click projects to see </h4></div>);
            }
          }/>
          <Route path="/Project" exact strict>
					<Project/>
		   </Route>
          </div>
        </Router>
      );
    }
  }
  
  export default App;