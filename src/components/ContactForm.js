import React, { Component } from 'react';
import { db } from '../../firebase'


const updateByPropertyName = (propertyName, value) => ({
  [propertyName]: value,
})


class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name:'',
      email: '',
      message: '',
      error: null,
    }
  }


  onSubmit = (event) => {
    const {
      name,
      email,
      message,
    } = this.state

    event.preventDefault()
    db.doCreateMessage(name, email, message)
  }

  render() {
    const {
      name,
      email,
      message,
      error,
    } = this.state

    const isInvalid =
      message === '' ||
      email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={name}
          onChange={event => this.setState(updateByPropertyName('name', event.target.value))}
          type="text"
          placeholder="Name"
        />
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={message}
          onChange={event => this.setState(updateByPropertyName('message', event.target.value))}
          type="message"
          placeholder="Message"
        />

        <button disabled={isInvalid} type="submit">
          Send
        </button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

export default SignInForm
