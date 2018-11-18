import { LIST_CARD } from "./type";
export function getListCard(list: Array<any>, loading: boolean) {
	return dispatch => {
		return dispatch({
			type: LIST_CARD,
			list: list,
			loading: loading,
		});
	};
}
