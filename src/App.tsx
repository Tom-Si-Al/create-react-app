import React from "react";

import { Form } from './components/Form'
import { isEmailValid } from "./validators";
import logo from "./logo.svg";
import "./App.css";

class App extends React.Component<{}, { input: string, isEmailValid: boolean}> {
  constructor() {
    super({});
    this.state = { 
      input: "", 
      isEmailValid: true,
    };
  }

  myChangeHandler = (event: any) => {
    console.log(event.target.value)
    this.setState({input: event.target.value});
  }

  mySubmitHandler = (event: any) => {
    event.preventDefault();
    this.setState({isEmailValid: isEmailValid(this.state.input)})
  }

  render() {
    return (
      <div>
        <div>
          <div>
            <Form onSubmit={this.mySubmitHandler} onChange={this.myChangeHandler}/>
          </div>
          <div>
            {this.state.isEmailValid ? null : <h3>Invalid input</h3> }
          </div>
        </div>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </div>
    );
  }
}

export default App;
