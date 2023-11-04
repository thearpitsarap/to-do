import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Todos from '../src/pages/todos.jsx';
import App from './App.jsx'; // replace this with your other components

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/todos" component={Todos} />
        <Route path="/" component={App} /> {/* replace this with your other routes */}
      </Switch>
    </Router>
  );
}

export default Main;