import uuid from "uuid";

export const INITIALTODOS = [
	{
		id: uuid(),
		task: "Learn JavaScript",
		complete: true
	},
	{
		id: uuid(),
		task: "Learn TypeScript",
		complete: false
	},
	{
		id: uuid(),
		task: "Learn Python",
		complete: true
	}
];