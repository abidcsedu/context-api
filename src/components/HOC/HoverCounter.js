import withCounter from "./HOC/WithCounter";

const HoverCounter = (props) => {
	return (
		<div>
			<h3 onMouseOver={props.incrementCount}>Hovered {props.count} times</h3>
		</div>
	);
};

export default withCounter(HoverCounter);
