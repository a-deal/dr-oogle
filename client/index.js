import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, hashHistory } from 'react-router'
import App from './components/App';
import Reviews from './components/Reviews';
import Review from './components/Review';
import UrlInput from './components/UrlInput';

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<Route path="/findDentist" component={UrlInput}/>
			<Route path="/viewDentists" component={Reviews}>
				<Route path="/reviews/:dentist" component={Review}/>
				</Route>
		</Route>
	</Router>
	, document.getElementById('app'));