import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import React from 'react'

import { isEmailValid, isPasswordValid } from './validators'

class App extends React.Component {
  state = {
    submitted: false,
    email: '',
    password: '',
    isFormValid: false,
  }

  handleEmailValidation = (event) => {
    this.setState({
      email: event.target.value,
      isEmailValid: isEmailValid(event.target.value),
    })
  }

  handlePasswordValidation = (event) => {
    this.setState({
      password: event.target.value,
      isPasswordValid: isPasswordValid(event.target.value),
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ submitted: true })
    if (this.state.isEmailValid && this.state.isPasswordValid) {
      this.setState({
        isFormValid: true,
      })
    } else {
      this.setState({
        isFormValid: false,
      })
    }
  }

  isDefined = (value) => typeof value !== 'undefined'

  render() {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  data-testid="formEmail"
                  type="text"
                  placeholder="Enter email"
                  onChange={this.handleEmailValidation}
                  isValid={
                    this.isDefined(this.state.isEmailValid) &&
                    this.state.isEmailValid
                  }
                  isInvalid={
                    this.isDefined(this.state.isEmailValid) &&
                    !this.state.isEmailValid
                  }
                />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  data-testid="formPassword"
                  type="password"
                  placeholder="Password"
                  onChange={this.handlePasswordValidation}
                  isValid={
                    this.isDefined(this.state.isPasswordValid) &&
                    this.state.isPasswordValid
                  }
                  isInvalid={
                    this.isDefined(this.state.isPasswordValid) &&
                    !this.state.isPasswordValid
                  }
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row>
          <Col>
            {this.state.submitted && this.state.isFormValid && (
              <h1>Happy Alex</h1>
            )}
            {this.state.submitted && !this.state.isFormValid && (
              <h1>Sad Alex</h1>
            )}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default App
