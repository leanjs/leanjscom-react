import React, { Component } from 'react';
import { db } from '../../firebase'


const updateByPropertyName = (propertyName, value) => ({
  [propertyName]: value,
})

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
}

class SignInForm extends Component {
  constructor(props) {
    super(props)

    this.state = { ...INITIAL_STATE }
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state

    // auth.doSignInWithEmailAndPassword(email, password)
    //   .then(() => {
    //     this.setState(() => ({ ...INITIAL_STATE }))
    //   })
    //   .catch(error => {
    //     this.setState(updateByPropertyName('error', error))
    //   })

    event.preventDefault()
    console.log('asd', db)
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state

    const isInvalid =
      password === '' ||
      email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <input
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
        />
        <input
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
        />

        <button disabled={isInvalid} type="submit">
          Sign In
        </button>

        { error && <p>{error.message}</p> }
      </form>
    )
  }
}

export default SignInForm
