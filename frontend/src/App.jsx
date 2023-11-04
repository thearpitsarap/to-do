import "./index.css";
import TodoFooter from './components/todo_footer';
import TodoNavbar from "./components/todo_navbar";
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <TodoNavbar></TodoNavbar>
      <main className="container mx-auto my-8 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-4">Get Organized with My Todo App</h2>
        <p className="mb-5 px-5 py-5">
          My Todo App is the perfect tool to help you stay on top of your tasks
          and get things done. With our easy-to-use interface, you can quickly
          add new tasks, set due dates, and mark tasks as complete.
        </p>
        <p className="mb-5 px-5 py-5">
          Whether you&rsquo;re managing a busy work schedule or just trying to keep
          track of your personal to-do list, My Todo App has everything you need
          to stay organized and productive.
        </p>
        <Link
          to="/todos"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
        >
          Get Started
        </Link>
      </main>
      <TodoFooter></TodoFooter>
    </>
  );
}

export default App;
