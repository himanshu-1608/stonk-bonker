import * as actionTypes from "../actions/actionTypes";

const initialState = {
	stonkList: [],
	selectedStonkList: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SET_STONK_LIST:
			return {
				...state,
				stonkList: action.value,
			};

		case actionTypes.CHANGE_SELECTED_STONK_LIST:
			return {
				...state,
				selectedStonkList: action.value,
			};

		default:
			return state;
	}
};

export default reducer;
