import * as React from "react";
import "./index.css";

/*所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。*/
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
