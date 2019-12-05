import React, { useReducer } from "react";
import DispatchContext from "../../context/context";
import Filter from "../../components/filter/filter";
import TodoAdd from "../../components/todo-add/todo-add";
import TodoList from "../../components/todo-list/todo-list";

import { INITIALTODOS } from "../../config/config";
import { filterReducer, todosReducer, combinedReducers } from "../../helper";

export default function Dashboard() {
	const [ state, dispatch ] = combinedReducers({
		filter: useReducer(filterReducer, 'ALL'),
		todos: useReducer(todosReducer, INITIALTODOS )
	});

	const { filter, todos } = state;
	const filteredTodos = todos.filter( todo => {
		if ( filter  === "ALL" ) {
			return true;
		}
		if ( filter === "COMPLETE" && todo.complete ) {
			return true;
		}
		if ( filter === "INCOMPLETE" && !todo.complete ) {
			return true;
		}
		return false;
	});

	return (
		<DispatchContext.Provider value={dispatch}>
			<Filter/>
			<TodoList todos={filteredTodos}/>
			<TodoAdd/>
		</DispatchContext.Provider>
	);
}