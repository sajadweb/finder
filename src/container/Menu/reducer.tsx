const initialState = {
	theme: "Blue",
};

export default function(state = initialState, action) {
	if (action.type === "ADD_THEME") {
		return {
			...state,
			...action,
		};
	}
	return state;
}
