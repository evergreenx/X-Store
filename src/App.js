import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home.js";
import Product from "./components/Product";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";


function App() {
  return (
    <div className="App bg-black">

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/products" component={Product} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
