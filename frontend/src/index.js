import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {InitJson} from './App';
import './index.css';

var dataSite;

fetch('http://www.mocky.io/v2/57dfec211000009020598073')
	.then(function(response) {
		return response.json().then(function(json){
			dataSite = json;
			InitJson(dataSite);
			
			ReactDOM.render(
				<App />,
				document.getElementById('root')
			);
		});
		
	}).catch(function(err) {
		console.log(err);
	});


