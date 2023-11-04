import { useEffect, useState } from 'react';
import TodoComponent from './TodoComponent';

const Todos = () => {
    const [todos, setTodos] = useState([]);

    // Replace this with your actual fetch or API call
    useEffect(() => {
        fetchTodos().then(setTodos);
    }, []);

    return (
        <div>
            <h1>Todos</h1>
            {todos.map(todo => <TodoComponent key={todo.id} todo={todo} />)}
        </div>
    );
};

export default Todos;

async function fetchTodos() {
    // Replace this with your actual fetch or API call
    return [
        { id: 1, title: 'First Todo' },
        { id: 2, title: 'Second Todo' },
    ];
}