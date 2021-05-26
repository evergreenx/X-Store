import "./App.css";
import Home from "./components/Home";
import Product from "./components/Product";
import Login from "./components/Auth/Login";
import SignUp from "./components/Auth/SignUp";

import ProductDetails from './components/ProductDetails'
import Cart from './components/Cart'





import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <div className="App">

      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUp} />


          <Route path="/products" component={Product} />
          <Route path="/cart" component={Cart}/>

          <Route path="/:id" component={ProductDetails}/>
       



      

        </Switch>
      </Router>
    </div>
  );
}

export default App;
