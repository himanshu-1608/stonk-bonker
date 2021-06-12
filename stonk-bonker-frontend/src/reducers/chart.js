import * as actionTypes from "../actions/actionTypes";

const initialState = {
	chartList: [],
	selectedChartList: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_CHART_LIST:
			return {
				...state,
				chartList: action.value,
			};

		case actionTypes.CHANGE_SELECTED_CHART_LIST:
			return {
				...state,
				selectedChartList: action.value,
			};

		default:
			return state;
	}
};

export default reducer;
