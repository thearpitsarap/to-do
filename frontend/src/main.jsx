import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import ReactDOM from 'react-dom';
import Todos from './todos.jsx';


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

ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

export default Main;