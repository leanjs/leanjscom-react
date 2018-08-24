import React, { Component } from 'react'
import { db } from '../../firebase'
import Ul, { Li } from './layout/Ul'
import Checkbox from './form/Checkbox'
import TextArea from './form/TextArea'
import LabelledField from './form/LabelledField'
import { P, Strong } from './text'
import Link from './navigation/Link'
import styled from 'styled-components'
import Button from './buttons/Button'

class ContactForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: '',
      email: '',
      message: '',
      interestedInDigitalSolutions: false,
      interestedInTraining: false,
      interestedInBothDigitalSolutionsAndTraining: false,
      allowMarketing: false,
      error: null,
      submitted: false,
    }
  }

  onSubmit = event => {
    event.preventDefault()

    return new Promise((resolve, reject) => {
      this.setState({ error: null }, resolve)
    })
      .then(() =>
        db.doCreateMessage(
          this.state.name,
          this.state.email,
          this.state.message,
          this.state.interestedInDigitalSolutions,
          this.state.interestedInTraining,
          this.state.interestedInBothDigitalSolutionsAndTraining,
          this.state.allowMarketing
        )
      )
      .then(() => console.log('Your message was recieved!'))
      .then(() => this.setState({ submitted: true }))
      .catch(e => {
        console.log('The following error occured: ', e.message)
        this.setState({ error: e })
      })
  }

  handleFormFieldChanged = (name, newValue) =>
    this.setState({ [name]: newValue })
  handleTextAreaChanged = name => event =>
    this.handleFormFieldChanged(name, event.target.value)
  handleCheckboxChanged = name => event =>
    this.handleFormFieldChanged(name, event.target.checked)

  render() {
    const {
      name,
      email,
      interestedInDigitalSolutions,
      interestedInTraining,
      interestedInBothDigitalSolutionsAndTraining,
      allowMarketing,
      message,
      error,
      submitted,
    } = this.state

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
          fieldType="textarea"
          id="contact-form-name"
          label="Name"
          onChange={this.handleTextAreaChanged('name')}
          placeholder="Name"
          value={name}
        />

        <LabelledField
          fieldType="textarea"
          id="contact-form-email"
          label="Phone number or email address"
          onChange={this.handleTextAreaChanged('email')}
          placeholder="Email Address"
          value={email}
        />

        <LabelledField
          fieldType="checkboxes"
          id="contact-form-interests"
          label="How can we help you?"
          onChange={this.handleCheckboxChanged}
          options={[
            {
              name: 'interestedInDigitalSolutions',
              checked: interestedInDigitalSolutions,
              label: 'Digital solutions',
            },
            {
              name: 'interestedInTraining',
              checked: interestedInTraining,
              label: 'Training',
            },
            {
              name: 'interestedInBothDigitalSolutionsAndTraining',
              checked: interestedInBothDigitalSolutionsAndTraining,
              label: 'Both!',
            },
          ]}
          onChange={this.handleCheckboxChanged}
        />

        <LabelledField
          fieldType="textarea"
          id="contact-form-message"
          label="Would you like to give more detail? Feel free!"
          onChange={this.handleTextAreaChanged('message')}
          placeholder="Message"
          value={message}
        />

        <LabelledField
          fieldType="singlecheckbox"
          id="contact-form-allow-marketing"
          label={
            <label htmlFor="contact-form-allow-marketing">
              We do not spam - ever. But, if you're up for it, we'd love to tell
              you about any cool new services or offers that we've got going on.
              Interested? Tick the box! Not sure, here's our{' '}
              <Link>Privacy Policy</Link>
            </label>
          }
          checked={allowMarketing}
          onChange={this.handleCheckboxChanged('allowMarketing')}
        />

        <Button disabled={isInvalid} type="submit">
          Send
        </Button>

        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </form>
    )
  }
}

export default ContactForm
