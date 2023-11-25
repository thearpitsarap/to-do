import { useEffect, useState } from 'react';
import TodoComponent from './components/todo_component';

const Todos = () => {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    useEffect(() => {
        const fetchAndSetTodos = async () => {
            const fetchedTodos = await fetchTodos();
            if (JSON.stringify(fetchedTodos) !== JSON.stringify(todos)) {
                setTodos(fetchedTodos);
            }
        };
        fetchAndSetTodos();
    }, [todos]);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    return (
        <>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required onChange={handleInputChange}></input>
            <div>
                {todos.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
            </div>
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