import { combineReducers } from "redux";
import { expenseReducer } from "./expenses";

const reducer = combineReducers({
  expense: expenseReducer,
});

export default reducer;
