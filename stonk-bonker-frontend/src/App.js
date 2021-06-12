import "./App.css";

import StonkSelector from "./components/StonkSelector";
import ChartTypeSelector from "./components/ChartTypeSelector";

function App() {
	const getChartData = () => {
		const links = [];
	};
	return (
		<div className="App">
			<header>
				<h1 style={{ textAlign: "center" }}>Stonk Bonker</h1>
			</header>
			<div className="app-header-flex-container">
				<StonkSelector />
				<ChartTypeSelector />
			</div>
			<div style={{ textAlign: "center" }}>
				<button id="submit-stonk-chart-details" onClick={getChartData}>
					Get Your Stonk Graph
				</button>
			</div>
		</div>
	);
}

export default App;
