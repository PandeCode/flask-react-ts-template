import React from "react";
import logo from "@assets/logo.svg";
import "@styles/App.css";

interface Props {}

export const App: React.FC<Props> = ({}) => {
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
};
