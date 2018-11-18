import { LIST_CARD } from "./type";
const initialState = {
	list: [],
	loading: true,
};

export default function (state = initialState, action) {
	if (action.type === LIST_CARD) {
		return {
			...state,
			...action,
		};
	}
	return state;
}