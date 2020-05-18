import React, { Component } from 'react'

import LabelledField from '../form/LabelledField'
import { P, Strong } from '../text'
import Link from '../navigation/Link'
import Button from '../buttons/Button'
import { sendMessage } from '../../api'

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      error: null,
      submitting: false,
      submitted: false,
    }
  }

  onSubmit = event => {
    event.preventDefault()
    const { email, name, message } = this.state

    this.setState({ submitting: true })
    sendMessage({ email, name, message })
      .then(() => {
        this.setState({ submitted: true, submitting: false })
      })
      .catch(error => {
        this.setState({ error, submitting: false, submitted: false })
      })
  }

  handleFormFieldChanged = (name, newValue) =>
    this.setState({ [name]: newValue })
  handleTextAreaChanged = name => event =>
    this.handleFormFieldChanged(name, event.target.value)
  handleCheckboxChanged = name => event => {
    return this.handleFormFieldChanged(name, event.target.checked)
  }

  render() {
    const { name, email, message, error, submitted, submitting } = this.state

    if (submitted) {
      return (
        <Strong large>
          Thank you for your submission! We will be in touch shortly.
        </Strong>
      )
    }

    const isInvalid = message === '' || email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <LabelledField
          required
          fieldType="textarea"
          id="contact-form-name"
          label="Name (required)"
          onChange={this.handleTextAreaChanged('name')}
          placeholder="Name"
          value={name}
        />

        <LabelledField
          required
          fieldType="textarea"
          id="contact-form-email"
          label="Phone number or email address (required)"
          onChange={this.handleTextAreaChanged('email')}
          placeholder="Phone number or email address"
          value={email}
        />

        <LabelledField
          required
          fieldType="textarea"
          id="contact-form-message"
          label="Would you like to give more detail? Feel free!"
          onChange={this.handleTextAreaChanged('message')}
          placeholder="Message"
          value={message}
        />

        <Button disabled={isInvalid || submitting} type="submit">
          {submitting ? '...' : 'Send'}
        </Button>

        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </form>
    )
  }
}

export default ContactForm
