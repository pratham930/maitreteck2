import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout.js";
import Singup from "./components/Singup";
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      {" "}
      <div>
        <Nav></Nav>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Cart" component={Cart} />
          <Route exact path="/Checkout" component={Checkout} />
          <Route exact path="/singup" component={Singup} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}
const Home = () => {
  return (
    <div className="home">
      <h1> cheack out our menu items</h1>
      <li className="now">
        {" "}
        <NavLink className="active_class" to="/cart">
          ORDER NOW!
        </NavLink>{" "}
      </li>
    </div>
  );
};
const Nav = () => {
  return (
    <div className="menustyle">
      <h1> swasch restorent </h1>
      <ul>
        <li>
          {" "}
          <NavLink className="active_class" to="/">
            {" "}
            Home
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="active_class" to="/cart">
            {" "}
            Menu
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="active_class" to="/singup">
            {" "}
            Singup
          </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};

export default App;
