import React, { Component } from "react";

export default class ClassForm extends Component {
  // const [name, setname] = useState({
  //     name : ""
  // })
  // const [name, setname] = useState([])

  state = { name: [], inp: "shubham" };

  handeladddata = () => {
    this.setState({ name: [...this.state.name, this.state.inp] });
    // onChange={e=> this.setState({..state , name : e.target.value})}
  };

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state)}</pre>
        <input
          type="text"
          value={this.state.inp}
          onChange={(e) => this.setState({ inp: e.target.value })}
          id="name"
          placeholder="Enter Your Name"
        />
        <hr/>
        <button
          onClick={this.handeladddata}
          type="button"
          class="btn btn-primary"
        >
          Submit
        </button>
{/* ******************************** */}
        {
         this.state.name.map(item => <>
          <h1>{item}</h1>
         </>)
      }
      </div>

     
    );
  }
}
