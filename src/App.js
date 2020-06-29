import React from "react";
import Nav from "./view/nav";
import Main from "./view/main";
import About from "./view/about";
import Component_ui from "./view/component_ui";
import "./App.scss";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

function App() {
	return (
		<Router>
			<div className="App">
				<Nav />
				<Switch>
					<Route exact path="/" component={Main} />
					<Route path="/about" component={About} />
					<Route path="/component_ui" component={Component_ui} />
				</Switch>
			</div>
		</Router>
	);
}
export default App;
