const HoverCounter = ({ count, incrementCount }) => {
	return (
		<div>
			<h3 onMouseOver={incrementCount}>Hovered {count} times</h3>
		</div>
	);
};

export default HoverCounter;
