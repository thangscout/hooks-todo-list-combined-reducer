import React, { useContext } from "react";
import DispatchContext from "../../context/context";

export default function TodoItem({ todo }) {
	const dispatch = useContext(DispatchContext);

	const handleChangeCheckbox = todo => {
		dispatch({
			type: todo.complete ? "UNDO_TODO" : "DO_TODO",
			id: todo.id
		})
	}

	const handleRemoveItem =  todo => {
		dispatch({ type: "REMOVE_ITEM", id : todo.id});
	}

	return (
		<li>
			<label>
				<input type="checkbox" checked={todo.complete} onChange={() => handleChangeCheckbox(todo)}/>
			</label>
			{todo.task}
			<button type="button" onClick={() => handleRemoveItem(todo)}>
				Remove
			</button>
		</li>
	);
}