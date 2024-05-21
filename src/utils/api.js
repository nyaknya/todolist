const API_BASE_URL = process.env.REACT_APP_BASE_URL;

export async function getTodoList() {
	const response = await fetch(`${API_BASE_URL}/todo`);
	const result = await response.json();
	return result;
}

export async function postTodoList(data) {
	const response = await fetch(`${API_BASE_URL}/todo`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(data),
	});
	const result = await response.json();
	return result;
}
