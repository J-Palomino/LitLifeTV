import React from "react";

export default class VideoBank extends React.Component {
  render() {
    return (
      <div>
        <div className="wrapper">
          <div id="first" className="items">
            <h5>Testing text</h5>
          </div>
          <div id="second" className="items">
            <h5> {this.props.video1}</h5>
          </div>
          <div id="third" className="items">
            <h5>thirdmost</h5>
          </div>
          <div id="fourth" className="items">
            <h5>finalist</h5>
          </div>
        </div>
        <br></br>
      </div>
    );
  }
}
