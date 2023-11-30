import { useEffect, useState } from 'react';
import List from "./components/todo_component";

const Todos = () => {
	const [todos, setTodos] = useState([]);
	const [inputValue, setInputValue] = useState("");

	useEffect(() => {
		fetchTodos().then(setTodos);
	}, []);

	const handleInputChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<>
			<input
				type="text"
				id="first_name"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
				placeholder="John"
				required
				onChange={handleInputChange}
			></input>
			<List todos={todos} />
		</>
	);
};

export default Todos;

async function fetchTodos() {
    return [
        { id: 1, title: 'First Todo' },
        { id: 2, title: 'Second Todo' },
    ];
}

