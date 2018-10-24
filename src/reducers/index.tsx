import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import homeReducer from "../container/HomeContainer/reducer";
import themeReducer from "../container/Menu/reducer";

export default combineReducers({
	form: formReducer,
	homeReducer,
	themeReducer,
});
