import logo from './logo.svg';
import './App.css';
import Home from "./pages/Home";
import Login from './pages/Login';
import Register from "./pages/Register";
import Houses from "./pages/Houses";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import logintest from './pages/Logintest';
import { useSelector } from "react-redux";


const App = () => {
  const user = useSelector((state) => state.user.currentUser);
  console.log("============================================"+user);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/houses">
          <Houses />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
