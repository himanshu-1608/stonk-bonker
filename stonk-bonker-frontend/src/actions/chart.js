import * as actionTypes from "./actionTypes";
import axios from "../axios";

export const changeSelectedChartList = (selectedChartList) => (dispatch) => {
	dispatch(actionChangeSelectedChartList(selectedChartList));
};

export const updateChartList = () => (dispatch) => {
	axios
		.get("/charts")
		.then((result) => {
			console.log("Got Charts, result: ", result);
			dispatch(setChartList(result.data.chartList));
		})
		.catch((err) => console.log("Error in getChartList(): ", err));
};

export const setChartList = (chartList) => {
	return {
		type: actionTypes.SET_CHART_LIST,
		value: chartList,
		info: "Changing Chart List Action",
	};
};

export const actionChangeSelectedChartList = (selectedChartList) => {
	return {
		type: actionTypes.CHANGE_SELECTED_CHART_LIST,
		value: selectedChartList,
		info: "Change Selected Charts List Action",
	};
};
