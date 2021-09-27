import React from "react";


import FormBS from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import { isEmailValid } from "../validators";

type MyProps = {
  // using `interface` is also ok
  isValid: (valid: boolean) => void
};
type MyState = {
  input: string; // like this
  isEmailValid: boolean;
};
export class Form extends React.Component<MyProps,MyState> {

  state : MyState = {
    input: "",
    isEmailValid: false
  }

  myChangeHandler = (event: any) => {
    this.setState({input: event.target.value});
    this.setState({isEmailValid: isEmailValid(this.state.input)})
  }

  mySubmitHandler = (event: any) => {
    event.preventDefault();
    this.setState({isEmailValid: isEmailValid(this.state.input)}, () => {
      this.props.isValid(this.state.isEmailValid)
    })
  }

  render() {
    return (
      <form onSubmit={this.mySubmitHandler}>
        <p>Enter your email, and submit:</p>
        <InputGroup className="mb-3">
          <InputGroup.Text>Email</InputGroup.Text>
          <FormControl onChange={this.myChangeHandler}
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
            name="email"
            isValid={this.state.isEmailValid}
            isInvalid={!this.state.isEmailValid}
          />
        </InputGroup>
        <Button as="input" type="submit" value="Submit" />{' '}
      </form>
    );
  }
}
