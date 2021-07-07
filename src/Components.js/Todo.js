import React from "react";
import {  Link} from 'react-router-dom';
import todopic from './images/todo.png'
export default function Todo() {
    return (
		<div className="mt-5">
			<h4>TODO App</h4>
			<br/>
			<Link to="/project">Back to projects</Link>
			<p>Description of App:In this app we can segreate the todos items on categeroies like completed and active tasks.
			You can see the picture of UI of our Todo app.
			</p>
			<a href="https://friendly-colden-328c94.netlify.app/"> demoLink</a><br/>
			<img src={todopic}  alt = '' height={300} width={400} /><br/>
            
		</div>
	);
}
