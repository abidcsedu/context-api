// import "./App.css";

import Section from "./components/Context-api/Section";
import Counter from "./components/Render-props/Counter";
import ClickCounter from "./components/Render-props/Render-props/ClickCounter";
// import HoverCounter from "./components/Render-props/Render-props/HoverCounter";
// import User from "./components/User";

function App() {
	return (
		<div style={{ padding: 20 }}>
			{/* HOC */}
			{/* <ClickCounter />
			<HoverCounter /> */}

			{/* RENDER PROPS */}
			{/* <ClickCounter />
			<HoverCounter /> */}
			{/* <User render={(isLoggedIn) => (isLoggedIn ? "Habib" : "Guest")} /> */}
			<Counter
				render={(count, incrementCount) => (
					<ClickCounter count={count} incrementCount={incrementCount} />
				)}
			/>
			<Section />
		</div>
	);
}

export default App;
