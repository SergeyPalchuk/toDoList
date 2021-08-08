import { toDoListReducer } from "./toDoListReducer"
import { createStore } from "redux"
import { combineReducers } from "redux"
const reducers = combineReducers({todolist: toDoListReducer})
const store = createStore(reducers)

export default store;