import WithCounter from "./HOC/WithCounter";

const ClickCounter = (props) => {
	return (
		<div>
			<button type="button" onClick={props.incrementCount}>
				Clicked {props.count} times
			</button>
		</div>
	);
};

export default WithCounter(ClickCounter);
