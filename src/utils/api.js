const API_BASE_URL = 'http://simtodolist-env.eba-umgpwabw.ap-southeast-2.elasticbeanstalk.com/api/v1';

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
