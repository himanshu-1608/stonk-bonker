import { useEffect } from "react";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import ListItemText from "@material-ui/core/ListItemText";
import Select from "@material-ui/core/Select";
import Checkbox from "@material-ui/core/Checkbox";
import { connect } from "react-redux";

import * as actionCreators from "../../actions/index";

import "./index.css";

const ChartTypeSelector = ({
	chartList,
	selectedChartList,
	updateChartList,
	changeSelectedChartList,
}) => {
	const handleChange = (event) => {
		changeSelectedChartList(event.target.value);
	};

	useEffect(() => {
		updateChartList();
	}, [updateChartList]);

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

const mapStateToProps = (state) => {
	return {
		chartList: state.chart.chartList,
		selectedChartList: state.chart.selectedChartList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateChartList: () => dispatch(actionCreators.updateChartList()),
		changeSelectedChartList: (value) =>
			dispatch(actionCreators.changeSelectedChartList(value)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(ChartTypeSelector);
