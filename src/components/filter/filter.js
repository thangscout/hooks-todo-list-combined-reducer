import React, { useContext } from "react";
import DispatchContext from "../../context/context";

export default function Filter() {
	const dispatch = useContext(DispatchContext);

	const handleShowAll = () => {
		dispatch({ type: "SHOW_ALL"})
	}

	const handleShowComplete = () => {
		dispatch({ type: "SHOW_COMPLETE"});
	}

	const handleShowIncomplete = () => {
		dispatch({ type: "SHOW_INCOMPLETE"});
	}

	const handleCompleteAll = () => {
		dispatch({ type: "ALL_DO_TODO"});
	}

	const handleIncompleteAll = () => {
		dispatch({ type: "ALL_UNDO_TODO"});
	}

	const hanldeRemoveAll = () => {
		dispatch({ type: "REMOVE_ALL"});
	}

	const handleReset = () => {
		dispatch({ type: "RESET"});
	}

	return (
		<div>
			<button type="button" onClick={handleShowAll}>
				Show All
			</button>
			<button type="button" onClick={handleShowComplete}>
				Show Complete
			</button>
			<button type="button" onClick={handleShowIncomplete}>
				Show Incomplete
			</button>
			<button type="button" onClick={handleCompleteAll}>
				All Complete
			</button>
			<button type="button" onClick={handleIncompleteAll}>
				All Incomplete
			</button>
			<button type="button" onClick={hanldeRemoveAll}>
				Remove All
			</button>
			<button type="button" onClick={handleReset}>
				Reset
			</button>
		</div>
	);
}