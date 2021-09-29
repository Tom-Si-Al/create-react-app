import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, Row, Col, Form, Button} from 'react-bootstrap'
import React from 'react'

class App extends React.Component {

  state = {
    submitted: false,
    email: '',
    isEmailValid: false,
    password: '',
    isPasswordValid: false,
    isFormValid: false
  }

  handleEmailValidation = (event) => {
    this.setState({
      email: event.target.value,
      isEmailValid: event.target.value.includes("@")
    })
  }


  handlePasswordValidation = (event) => {
    this.setState({
      password: event.target.value,
      isPasswordValid: event.target.value.length > 5
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({ submitted: true })
    if (this.state.isEmailValid && this.state.isPasswordValid) {
      this.setState({
        isFormValid: true
      })
    } else {
      this.setState({
        isFormValid: false
      })
    }
  }

  render () {
    return (
      <Container>
        <Row>
          <Col>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="text" placeholder="Enter email" onChange={this.handleEmailValidation} isValid={this.state.isEmailValid} isInvalid={!this.state.isEmailValid} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={this.handlePasswordValidation} isValid={this.state.isPasswordValid} isInvalid={!this.state.isPasswordValid} />
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
    );
  }
}

export default App;