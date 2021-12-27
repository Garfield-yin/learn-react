import React from "react";
import { MouseEvent } from "react";

interface Props {
	name: string;
	onClick(event: MouseEvent<HTMLButtonElement>): void;
}

const Button: React.FC<Props> = (props) => {
	return <button onClick={props.onClick}>{props.name}</button>;
};

export default Button;
