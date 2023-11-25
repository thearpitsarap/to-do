import { useEffect, useState } from 'react';
import TodoComponent from './components/todo_component';

const Todos = () => {
    const [todos, setTodos] = useState([]);
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
    return [
        { id: 1, title: 'First Todo' },
        { id: 2, title: 'Second Todo' },
    ];
}