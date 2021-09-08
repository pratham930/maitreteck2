import React from "react";
import "./App.css";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout.js";
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
        </Switch>
      </div>
    </BrowserRouter>
  );
}
const Home = () => {
  return (
    <div className="home">
      <h1> cheack out our menu item</h1>
      <li>
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
      <h1> Maitreteck Restorent </h1>
      <ul>
        <li>
          {" "}
          <NavLink className="active_class" to="/">
            {" "}
            home
          </NavLink>{" "}
        </li>
        <li>
          {" "}
          <NavLink className="active_class" to="/cart">
            {" "}
            menu
          </NavLink>{" "}
        </li>
      </ul>
    </div>
  );
};

export default App;
