import React, { useState, useContext } from "react";
import uuid from "uuid";
import DispatchContext from "../../context/context";

export default function TodoAdd() {
	const [ task, setTask ] = useState('');
	const dispatch  = useContext(DispatchContext);

	const handleChangeInput = event => {
		setTask(event.target.value);
	}

	const handleSubmit = event => {
		if ( task ) {
			dispatch({ type: "ADD_TODO", task, id: uuid() });
		}
		setTask('');
		event.preventDefault();
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" value={task} onChange={handleChangeInput}/>
			<button type="submit">Add Todos</button>
		</form>
	);
}