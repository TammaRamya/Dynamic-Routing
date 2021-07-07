import React from "react";
import Route from 'react-router-dom/Route';
import { BrowserRouter as Router, NavLink,useRouteMatch} from 'react-router-dom';
import Todo from './Todo'

import TipCalculator from "./TipCalculator";
import Counter from "./Counter";
export default function Project() {
    let match = useRouteMatch();
	return (
        <Router>
		<div className="mt-5" >
			<h1>Projects</h1>
            <ul>
            <NavLink to={`${match.url}/TODO`} exact strict  activeStyle={{ color:'green' }}>ToDO</NavLink>
            &nbsp;  &nbsp;  &nbsp;
            <NavLink to={`${match.url}/TipCalculator`} exact strict activeStyle={{ color:'green' }}>TipCalculator</NavLink>
            &nbsp;  &nbsp;  &nbsp;
            <NavLink to={`${match.url}/Counter`} exact strict activeStyle={{ color:'green' }}>Counter</NavLink>
         </ul>
         <Route path={`${match.path}/TODO`}>
             <Todo />
         </Route>
         <Route path={`${match.path}/TipCalculator`}>
             <TipCalculator />
         </Route>
         <Route path={`${match.path}/Counter`}>
             <Counter />
         </Route>
		</div>
        </Router>
	);
}
