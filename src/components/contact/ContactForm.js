import React, { Component } from 'react'
import styled from 'styled-components'

import { db } from '../../../firebase'
import Ul, { Li } from '../layout/Ul'
import Checkbox from '../form/Checkbox'
import TextArea from '../form/TextArea'
import LabelledField from '../form/LabelledField'
import { P, Strong } from '../text'
import Link from '../navigation/Link'
import Button from '../buttons/Button'
import Indented from '../sections/Indented'

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
      uxDesign: false,
      graphQL: false,
      react: false,
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
          this.state.uxDesign,
          this.state.react,
          this.state.graphQL,
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
      uxDesign,
      react,
      graphQL,
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
          label="Which sprint are you interested in?"
          onChange={this.handleCheckboxChanged}
          options={[
            {
              name: 'UX design',
              checked: uxDesign,
              label: 'UX design',
            },
            {
              name: 'React',
              checked: react,
              label: 'React',
            },
            {
              name: 'GraphQL',
              checked: graphQL,
              label: 'GraphQL',
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
              Sign up for our newsletter!
            </label>
          }
          checked={allowMarketing}
          onChange={this.handleCheckboxChanged('allowMarketing')}
        />
        <P>
          We do not spam - ever. But, if you're up for it, we'd love to tell you
          about any cool new services or offers that we've got going on.
          Interested? Tick the box! Not sure, here's our{' '}
          <Link>Privacy Policy</Link>
        </P>
        <Button disabled={isInvalid} type="submit">
          Send
        </Button>

        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </form>
    )
  }
}

export default ContactForm
