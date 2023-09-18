import React, { Component } from "react";

export default class BasicCounter extends Component {
  // const [first, setfirst] = useState(0)
  state = { count: 0 };

  inc = () => {
    this.setState({ count: this.state.count + 1 });
  };

  des = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <>
        <div>
          <h1>{this.state.count}</h1>
          <button onClick={this.inc}>+1</button>
          <button onClick={this.des}>-1</button>
        </div>
      </>
    );
  }
}
