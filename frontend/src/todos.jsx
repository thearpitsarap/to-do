import { useEffect, useState } from 'react';
import List from "./components/todo_component";
import TodoFooter from './components/todo_footer';
import TodoNavbar from "./components/todo_navbar";

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
			<TodoNavbar></TodoNavbar>
			<div className="flex p-4 m-4 sm">
				<input
					type="text"
					id="first_name"
					className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 flex-grow p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
					placeholder="Your Tasks"
					required
					onChange={handleInputChange}
				></input>
				<button className='pl-4 pr-4 ml-2 bg-blue-700 rounded-lg'>
					+
				</button>
			</div>
			<div className='p-4 m-4'>
				<List todos={todos} />
			</div>
			<TodoFooter></TodoFooter>
		</>
	);
};

export default Todos;

// dummy data
async function fetchTodos() {
    return [
		{
			id: 1,
			title: 'Buy milk',
		},
		{
			id: 2,
			title: 'Do laundry',
		},
		{
			id: 3,
			title: 'Learn React',
		},
    ];
}

