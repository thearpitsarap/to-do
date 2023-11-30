import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import Todos from './todos.jsx';
import { createRoot } from "react-dom/client";


function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
}

createRoot(document.getElementById('root')).render(<Main />);

export default Main;