import React from "react";
import {  Link} from 'react-router-dom';
import counterpic from './images/counter.png'
export default function Counter() {
    return (
		<div className="mt-5">
			<h4>Counter</h4>
			<Link to="/project">Back to projects</Link>
			<br/>
			<p>Description of App:We increment or decrement the count value based on the click of button..and
				 displaying the count value in red or green based on positive or negative number.
			</p>
			<a href="https://friendly-colden-328c94.netlify.app/"> demoLink</a><br/>
			<img src={counterpic}  alt = '' height={300} width={300} /><br/>
		</div>
	);
}