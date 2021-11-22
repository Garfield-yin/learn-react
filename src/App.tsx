import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import UserElement from "./components/User";
import Hello from "./components/Hello";
import Count from "./hooks/Counter";

import "./App.css";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Hello React! </p>
				<h1> 中年程序员的 React 学习之路!</h1>
				<Routes>
					<Route path="/about" element={<UserElement />} />
					<Route path="/components/hello" element={<Hello name="garfield" />} />
					<Route path="/hooks/count" element={<Count />}></Route>
				</Routes>
				<nav>
					<Link to="/about">tsx examples of user</Link>
					<br />
					<Link to="/components/hello">components example: Hello</Link>
					<br />
					<Link to="/hooks/count">hooks example: Count</Link>
				</nav>
			</header>
		</div>

		/*
		(
			
		)
		*/
	);
}

export default App;
