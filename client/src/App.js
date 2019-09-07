import React, { Component } from "react";
import "./App.css";
import axios from 'axios'

class App extends Component {

state = {pingresult:false};




ping = ()=>{
  axios.get("/api/ping")
  .then(({data})=>this.setState({pingresult:data}))
}


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome</h2>
          <button onClick={this.ping}>Ping API</button>
          <br/> <br/>
          <div>{`ping test reults: ${this.state.pingresult}`}</div>
        </div>
      </div>
    );
  }
}

export default App;
