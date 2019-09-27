import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Nav.js";
import Jumbo from "./Components/Jumbotron.js";
import Carousel from "./Components/Carousel.js";
import Card from "react-bootstrap/Card";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbo />
        <Carousel />
        <Switch>
          {/* <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NoMatch} /> */}
        </Switch>
        <Card.Footer className="text-muted">
          Copyright © 2019 LitLife TV
        </Card.Footer>
      </div>
    </Router>
  );
}

export default App;
