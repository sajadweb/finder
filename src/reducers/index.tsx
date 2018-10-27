import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import themeReducer from "../container/Menu/reducer";

export default combineReducers({
	form: formReducer,
	themeReducer,
});
