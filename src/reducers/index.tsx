import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import themeReducer from "../container/Menu/reducer";
import cardReducer from "../container/CardContainer/Redux/reducer";

export default combineReducers({
	form: formReducer,
	themeReducer,
	cardReducer,
});
