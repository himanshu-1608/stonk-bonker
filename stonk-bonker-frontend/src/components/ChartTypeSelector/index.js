import { useEffect, useState } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";

import "./index.css";

const ChartTypeSelector = (props) => {
	const [chartList, setChartList] = useState(["Loading..."]);
	const [selectedChartList, setSelectedChartList] = useState([]);

	const handleChange = (event) => {
		setSelectedChartList(event.target.value);
	};

	useEffect(() => {
		setTimeout(() => {
			setChartList([
				"Closed Rates",
				"Opening Rates",
				"CandleStick Chart",
				"% return Chart",
			]);
		}, 2000);
	}, []);

	return (
		<div className="chart-selector-base">
			<FormControl className="chart-selector-formcontrol">
				<InputLabel>Pick Up Charts to Render</InputLabel>
				<Select
					multiple
					value={selectedChartList}
					onChange={handleChange}
					input={<Input />}
					renderValue={(selected) => selected.join(", ")}>
					{chartList.map((chart) => (
						<MenuItem key={chart} value={chart}>
							<Checkbox checked={selectedChartList.indexOf(chart) > -1} />
							<ListItemText primary={chart} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};

export default ChartTypeSelector;
