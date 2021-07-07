
import React from 'react'
import {BrowserRouter as Router,Link,Route} from 'react-router-dom'
import User from './User'
function App() {
  let user=[
    {name:'hh',id:1},
    {name:'peter',id:2},
    {name:'bruce',id:3},
    {name:'tony',id:4},
  ]
  return (
    <div className="App">
      <Router>
      <h1>React Dynamic Routing</h1>
      {
        user.map((item)=>
      <div><Link to={"/pro/"+item.id+"/"+item.name}>{item.name}</Link></div>)
      }
      <Route path="/pro/:id/:name" ><User /></Route>
      </Router>
    </div>
  );
}
export default App;