import "./App.css";
import Home from "./components/Home.js";
import Product from "./components/Product";
import Login from "./components/Auth/Login";
import ProductDetails from './components/ProductDetails'



import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App bg-black">

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/login" component={Login} />

          <Route path="/products" component={Product} />
          <Route path="/:id" component={ProductDetails}/>


      

        </Switch>
      </Router>
    </div>
  );
}

export default App;
