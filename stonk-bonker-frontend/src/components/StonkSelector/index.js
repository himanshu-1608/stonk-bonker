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
const StonkSelector = ({
	stonkList,
	selectedStonkList,
	updateStonkList,
	changeSelectedStonkList,
}) => {
	const handleChange = (event) => {
		changeSelectedStonkList(event.target.value);
	};

	useEffect(() => {
		updateStonkList();
	}, [updateStonkList]);

	return (
		<div className="stonk-selector-base">
			<FormControl className="stonk-selector-formcontrol">
				<InputLabel>Pick Up Your Stonks</InputLabel>
				<Select
					multiple
					value={selectedStonkList}
					onChange={handleChange}
					input={<Input />}
					renderValue={(selected) => selected.join(", ")}>
					{stonkList.map((stonk) => (
						<MenuItem key={stonk} value={stonk}>
							<Checkbox checked={selectedStonkList.indexOf(stonk) > -1} />
							<ListItemText primary={stonk} />
						</MenuItem>
					))}
				</Select>
			</FormControl>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		stonkList: state.stonk.stonkList,
		selectedStonkList: state.stonk.selectedStonkList,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		updateStonkList: () => dispatch(actionCreators.updateStonkList()),
		changeSelectedStonkList: (value) =>
			dispatch(actionCreators.changeSelectedStonkList(value)),
	};
};
export default connect(mapStateToProps, mapDispatchToProps)(StonkSelector);
