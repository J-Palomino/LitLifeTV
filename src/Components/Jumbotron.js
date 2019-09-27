import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Video from "./Video.js";
function Jumbo() {
  return (
    <div>
      <Jumbotron>
        <Container>
          <h1 className="green-txt">Lit Life TV</h1>
          <p>
            Television your way! Watch us on all the popular platforms. Apple
            TV, Roku, Fire TV, Chromecast and your Phone!
          </p>
          <Video />
        </Container>
      </Jumbotron>
    </div>
  );
}
export default Jumbo;
