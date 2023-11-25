import "./index.css";
import TodoFooter from './components/todo_footer';
import TodoNavbar from "./components/todo_navbar";
import { Link } from 'react-router-dom';

function App() {
  console.log('App is rendering'); // This will log to the browser console

  return (
    <>
      <TodoNavbar></TodoNavbar>
      <main className="container flex flex-col items-center justify-center mx-auto my-8">
        <h2 className="mb-4 text-3xl font-bold">Get Organized with My Todo App</h2>
        <p className="px-5 py-5 mb-5">
          My Todo App is the perfect tool to help you stay on top of your tasks
          and get things done. With our easy-to-use interface, you can quickly
          add new tasks, set due dates, and mark tasks as complete.
        </p>
        <p className="px-5 py-5 mb-5">
          Whether you&rsquo;re managing a busy work schedule or just trying to keep
          track of your personal to-do list, My Todo App has everything you need
          to stay organized and productive.
        </p>
        <Link
          to="/todos"
          className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Get Started
        </Link>
      </main>
      <TodoFooter></TodoFooter>
    </>
  );
}

export default App;
