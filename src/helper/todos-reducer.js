import { INITIALTODOS } from "../config/config";

export const todosReducer = ( state, action ) => {
	switch( action.type ) {
		case "DO_TODO":
			return state.map(todo => {
				if ( todo.id === action.id ) {
					return { ...todo, complete: true };
				} else {
					return todo;
				}
			});
		
		case "UNDO_TODO":
			return state.map(todo => {
				if ( todo.id === action.id ) {
					return { ...todo, complete: false };
				} else {
					return todo;
				}
			});

		case "ADD_TODO":
			return state.concat({
				task: action.task,
				id: action.id,
				complete: false
			});
		
		case "ALL_DO_TODO":
			return state.map(todo => {
				return { ...todo, complete: true };
			});

		case "ALL_UNDO_TODO":
			return state.map(todo => {
				return { ...todo, complete: false };
			});

		case "REMOVE_ITEM":
			return state.filter( item => item.id !== action.id);
		
		case "REMOVE_ALL":
			return state = [];
		
		case "RESET":
			return state = INITIALTODOS;

		default:
			return state;
	}
}