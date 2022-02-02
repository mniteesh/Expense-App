import { combineReducers, createStore } from "redux";
import { expenseReducer } from "../reducers/expenses";

const intialState = {}
const reducer = combineReducers({
    expenses : expenseReducer ,
})
const store = createStore(reducer, intialState) ;
export default store ;
