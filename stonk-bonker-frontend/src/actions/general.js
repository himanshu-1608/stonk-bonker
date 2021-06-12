import * as actionTypes from "./actionTypes";

export const clearSelectedStonksCharts = () => (dispatch) => {
	dispatch(actionClearSelectedStonksCharts());
};

export const actionClearSelectedStonksCharts = () => {
	return {
		type: actionTypes.CLEAR_SELECTED_STONKS_CHARTS,
		info: "Clear Sekected Stonk Chart List Action",
	};
};
