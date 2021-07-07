import React ,{useState,useEffect}from 'react'
import axios from 'axios'
import { BrowserRouter as Router, Link,NavLink} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import User from './Usser'

 function DataFetching(){
    const [posts,setPosts]=useState([])
    useEffect(()=>{
        axios.get('https://api.github.com/repos/octocat/Hello-World/issues')
        .then(res =>{
            
            setPosts(res.data)
            
        })
        .catch(err =>{
            console.log(err)
        })
    },[]);
    console.log(posts)
    const items =posts.map(value => {
        return (
            <div>
          
            <Link key={value.id}  to={`/issue/${value.number}` }>
              {value.title}
            </Link>
          </div>
        );
      });
    return(
        <div>
           
           <Router>
           <NavLink to="/" exact activeStyle={{ color:'green' }}>Refresh</NavLink>
              &nbsp;  &nbsp;  &nbsp;
              <NavLink to="/issues" exact strict  activeStyle={{ color:'green' }}>Issues</NavLink>
          <Route path="/" exact strict render={
            () => {
              return ( <div><h1><center> <h1>Github Issues</h1></center> &nbsp;</h1></div>);
            }
          }/>
          <Route path="/issues" exact strict render={
            () => {
              return ( <div><ul> {items} </ul></div>);
            }
          }/>
          
          <Route path="/issue/:id"  exact strict><User /></Route>
          </Router>
        </div>
    )
}
export default DataFetching
