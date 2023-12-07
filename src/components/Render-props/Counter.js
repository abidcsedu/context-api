import { useState } from "react";

const Counter = ({ render }) => {
	const [count, setCount] = useState(0);

	const incrementCount = () => {
		setCount((prevCount) => prevCount + 1);
	};
	return render(count, incrementCount);
};

export default Counter;
