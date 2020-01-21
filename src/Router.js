import React from "react";
import { Switch, Route } from "react-router";
import Quizmain from './containers/Quizmain'
// import Home from './containers/Home'
// import Login from './components/About'
// import Navigation from './containers/'
// import Quiz from './containers/Dashboard'

const Router = () => {
	return (
		<Switch>
			<Route exact path="/" component={Quizmain} />
			{/* <Route path="/navigation" component={Navigation} /> */}
			{/* <Route path="//:id" component={} /> */}
			{/* <Route path="/" component={Quiz} /> */}
		</Switch>
	);
};

export default Router;
