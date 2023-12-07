import { useState } from "react";

const WithCounter = (OriginalComponent) => {
	const NewComponent = () => {
		const [count, setCount] = useState(0);

		const incrementCount = () => {
			setCount((prevCount) => prevCount + 1);
		};
		return <OriginalComponent count={count} incrementCount={incrementCount} />;
	};

	return NewComponent;
};

export default WithCounter;
