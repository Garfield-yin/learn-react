import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import UserElement from "./components/User";
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
				</Routes>
				<nav>
					<Link to="/about">tsx examples of user</Link>
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
