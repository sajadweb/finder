
export function addTheme(theme: string) {
	return dispatch => {
		return dispatch({
			type: "ADD_THEME",
			theme: theme,
		});
	};
}
