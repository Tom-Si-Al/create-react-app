import React from 'react'

import { Form } from './components/Form'
import './App.css'

class App extends React.Component<{}, { input: string; isValid: boolean }> {
  constructor() {
    super({})
    this.state = {
      input: '',
      isValid: false,
    }
  }

  isValid = (valid: boolean) => {
    this.setState({ isValid: valid })
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Form isValid={this.isValid} />
          </div>
          <div>
            {this.state.isValid ? 'Valid input' : <h3>Invalid input</h3>}
          </div>
        </div>
      </div>
    )
  }
}

export default App
