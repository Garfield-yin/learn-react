import React from "react";
import { MouseEvent } from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import UserElement from "./components/User";
import Hello from "./components/Hello";
import Count from "./hooks/Counter";
import Clock from "./components/Clock";
import Button from "./components/Button";
import EffectHookExample from "./hooks/EffectHookExample";

import "./App.css";

const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
	e.preventDefault();
	alert("You clicked button.");
	console.log("You clicked button.");
};
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
					<Route
						path="/components/clock"
						element={<Clock date={new Date()} />}
					/>
					<Route
						path="/components/button"
						element={<Button name="testButton" onClick={handleClick} />}
					></Route>
					<Route path="/hooks/count" element={<Count />}></Route>
					<Route
						path="/hooks/effect/hook/example"
						element={<EffectHookExample />}
					></Route>
				</Routes>
				<nav>
					<Link to="/about">tsx examples of user</Link>
					<br />
					<Link to="/components/hello">components example: Hello</Link>
					<br />
					<Link to="/components/clock">components example: Clock</Link>
					<br />
					<Link to="/components/button">components Button: Button</Link>
					<br />
					<Link to="/hooks/count">hooks example: Count</Link>
					<br />
					<Link to="/hooks/effect/hook/example">
						effect hooks example: Count
					</Link>
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
