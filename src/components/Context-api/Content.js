import Counter from "../Render-props/Counter";
import HoverCounter from "../Render-props/Render-props/HoverCounter";

const Content = () => {
	return (
		<div>
			<h4>This is a content</h4>
			<Counter
				render={(count, incrementCount) => (
					<HoverCounter count={count} incrementCount={incrementCount} />
				)}
			/>
		</div>
	);
};

export default Content;
