import {withRouter,Link} from 'react-router-dom'
import React ,{useState,useEffect}from 'react'
import axios from 'axios'
function User(props)
{
    const ID=props.match.params.id
    console.log(ID)
    const[issue,setIssue]=useState([])
    useEffect(()=>{
        axios.get(`https://api.github.com/repos/octocat/Hello-World/issues/ ${ID} `)
        .then(res =>{
            setIssue(res.data)
            
        })
        .catch(err =>{
            console.log(err)
        })
    },);
    
    console.warn(props)
    return(
    <div> 
         
      <h1>React Dynamic Routing</h1>
      <Link to="/"  exact strict> BacktoTotalIssues</Link>
        <h4>ISsue Title:{issue.title}</h4>
        <h4>IssueNumber: {issue.number}</h4>
        <h4>IssueID:{issue.id}</h4>
        <h4>IssueNODEID: {issue.node_id}</h4>
        <h4>Issueupdated_at: {issue.updated_at}</h4>
        <h4>Issuecreated_at: {issue.created_at}</h4>
       
    </div>
    )
}

export default withRouter(User);