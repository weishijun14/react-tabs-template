import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    active1: true,
    active2: false
  };

  handleClick(params) {
    this.setState({
      active1: params === 1 ? true : false,
      active2: params === 2 ? true : false
    });
  }

  render() {
    const { active1, active2 } = this.state;
    return (
      <div className="App">
        <div className="tab">
          <button
            className={`tablinks ${active1 ? "active" : ""}`}
            onClick={() => this.handleClick(1)}
          >
            People
          </button>
          <button
            className={`tablinks ${active2 ? "active" : ""}`}
            onClick={() => this.handleClick(2)}
          >
            Item
          </button>
        </div>
        <div className="line">
          <span
            className="arrow"
            style={{ left: `${active2 ? "100px" : "32px"}` }}
          />
          <span
            className="arrow2"
            style={{ left: `${active2 ? "100px" : "32px"}` }}
          />
        </div>
        {/*Tab content*/}
        <div
          id="London"
          class="tabcontent"
          style={{ display: `${active1 ? "block" : "none"}` }}
        >
          <h3>London</h3>
          <p>London is the capital city of England.</p>
        </div>
        <div
          id="Paris"
          class="tabcontent"
          style={{ display: `${active2 ? "block" : "none"}` }}
        >
          <h3>Paris</h3>
          <p>Paris is the capital of France.</p>
        </div>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
