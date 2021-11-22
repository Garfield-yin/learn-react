import * as React from "react";
import "./index.css";

export interface Props {
	name: string;
}

function Hello(prop: Props) {
	return (
		<div className="hello">
			<div className="greeting">Hello {prop.name}</div>
		</div>
	);
}

export default Hello;
