import './App.module.scss';
import { useEffect, useState } from 'react';
import { getTodoList, postTodoList } from './utils/api.js';

function App() {
	const [todoList, setTodoList] = useState();

	useEffect(() => {
		const fetchTodolist = async () => {
			try {
				const getTodo = await getTodoList();
				setTodoList(getTodo);
				console.log(getTodo);
			} catch (error) {
				console.error(error);
			}
		};

		fetchTodolist();
	}, []);
	const nowTime = new Date();

	const todoData = {
		title: '예시데이터고',
		description: '보내보겠습니다',
		onDate: nowTime.toLocaleDateString(),
		cardColor: '#4dd0e1',
	};

	const handleButtonClick = () => {
		postTodoList(todoData)
			.then((result) => {
				console.log('POST 요청 성공:', result);
			})
			.catch((error) => {
				console.error('POST 요청 실패:', error);
			});
	};

	return (
		<div>
			<button type="button" onClick={handleButtonClick}>
				보내보기
			</button>
		</div>
	);
}

export default App;
