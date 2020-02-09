import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);
      this.state = { apiResponse: ""};
  }

  callAPI() {
      fetch("http://localhost:8081/test")
          .then(res => res.text())
          .then(res => this.setState({ apiResponse: res }));
  }

  componentWillMount() {
      this.callAPI();
  }

  render() {
    let inputClassNames = ["ui input", "focus"];
    return (
      <div className="App">
        <div className={inputClassNames.join(" ")}><input type="text" placeholder="Search..." /></div>
        <p className="App-intro">The response is {this.state.apiResponse}</p>
      </div>
    );
  }
}

export default App;
