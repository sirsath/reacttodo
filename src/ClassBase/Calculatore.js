import React, { Component } from "react";

export default class Calculatore extends Component {
  state = { count: [], inp1: 0, inp2: 0 };

  handelAddition = () => {
    this.setState({ count: [this.state.inp1 + this.state.inp2] });
  };

  render() {
    return (
      <div>
        <div class="container">
             <h2 className="text-center mt-2 bg-warning">Class Base Components Counter</h2>
          <div class="row">
            <div class="col-sm-6 offset-sm-3 mt-3">
              <h1 className="text-center">{this.state.count}</h1>
              <div>
                <input
                  type="text"
                  class="form-control m-2"
                  value={this.state.inp1}
                  onChange={(e) => this.setState({ inp1: +e.target.value })}
                  id="name"
                  placeholder="Enter Your Amount_1"
                />
              </div>
              <div>
                <input
                  type="text"
                  class="form-control m-2"
                  value={this.state.inp2}
                  onChange={(e) => this.setState({ inp2: +e.target.value })}
                  id="name"
                  placeholder="Enter Your Amount_2"
                />
              </div>
              <button
                onClick={this.handelAddition}
                type="button"
                class="btn btn-primary m-2"
              >
                +
              </button>
              <button type="button" class="btn btn-primary m-2">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
