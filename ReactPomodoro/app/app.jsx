var React = require("react");
var ReactDOM = require("react-dom");
// destructuring
// same as var Route = require("react-router").Route;
var {Route, Router, IndexRoute, hashHistory} = require("react-router");
var Main = require("Main");
var Timer = require("Timer");
var Countdown = require("Countdown");

// Load foundation
require('style!css!foundation-sites/dist/foundation.min.css');
$(document).foundation();

// App css
require('style!css!sass!AppStyles');

ReactDOM.render(
	<Router history={hashHistory}>
		<Route path="/" component={Main}>
			<Route path="countdown" component={Countdown}/>
			<IndexRoute component={Timer}/>
		</Route>
	</Router>,
	document.getElementById('app')
);
