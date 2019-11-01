import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./Components/Nav";
import Jumbo from "./Components/Jumbotron.js";
import Carousel from "./Components/Carousel.js";
import Card from "react-bootstrap/Card";
import VideoBank from "./Components/VideoBank";
import "./App.css";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Jumbo />
        {/* <VideoBank video1="first video" /> */}

        <Switch>
          {/* <Route exact path="/" component={Books} /> */}
          <Route exact path="/cooking" component={VideoBank} />
          {/* <Route exact path="/contact" component={Contact} /> */}
          {/* <Route component={NoMatch} /> */}
        </Switch>
        <Carousel />
        <Card.Footer className="text-muted">
          Copyright©{" "}
          <span className="justify-content-end">2019 LitLife TV</span> 2019
          LitLife TV
        </Card.Footer>
      </div>
    </Router>
  );
}

export default App;
