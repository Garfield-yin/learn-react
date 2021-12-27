import React from "react";

interface Props {
	date: Date;
}
const Clock: React.FC<Props> = (props) => {
	return (
		<div>
			<h1>Hello, Clock!</h1>
			<h2> It is {props.date.toLocaleTimeString()}</h2>
		</div>
	);
};
Clock.defaultProps = {
	date: new Date(),
};

export default Clock;
