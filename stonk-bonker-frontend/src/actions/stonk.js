import * as actionTypes from "./actionTypes";
import axios from "../axios";

export const changeSelectedStonkList = (selectedStonkList) => (dispatch) => {
	dispatch(actionChangeSelectedStonkList(selectedStonkList));
};

export const updateStonkList = () => (dispatch) => {
	axios
		.get("/stonks")
		.then((result) => {
			console.log("Got Stonks, result: ", result);
			dispatch(setStonkList(result.data.stonkList));
		})
		.catch((err) => console.log("Error in getStonkList(): ", err));
};

export const setStonkList = (stonkList) => {
	return {
		type: actionTypes.SET_STONK_LIST,
		value: stonkList,
		info: "Changing Stonk List Action",
	};
};

export const actionChangeSelectedStonkList = (selectedStonkList) => {
	return {
		type: actionTypes.CHANGE_SELECTED_STONK_LIST,
		value: selectedStonkList,
		info: "Change Selected Stonks List Action",
	};
};
