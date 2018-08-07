import React, { Component } from 'react'
import { db } from '../../firebase'
import Ul, { Li } from './layout/Ul'
import Checkbox from './form/Checkbox'
import Link from './navigation/Link'
import styled from 'styled-components'

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
    }
  }

  onSubmit = event => {
    const {
      name,
      email,
      message,
      interestedInDigitalSolutions,
      interestedInTraining,
      interestedInBothDigitalSolutionsAndTraining,
      allowMarketing,
    } = this.state

    event.preventDefault()

    return db
      .doCreateMessage(
        name,
        email,
        message,
        interestedInDigitalSolutions,
        interestedInTraining,
        interestedInBothDigitalSolutionsAndTraining,
        allowMarketing
      )
      .then(() => console.log('Your message was recieved!'))
      .catch(e => console.log('The following error occured: ', e.message))
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
    } = this.state

    const isInvalid = message === '' || email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Name</label>
          <br />
          <textarea
            onChange={this.handleTextAreaChanged('name')}
            type="text"
            placeholder="Name"
          >
            {name}
          </textarea>
        </div>
        <div>
          <label>Phone number or email address</label>
          <br />
          <textarea
            onChange={this.handleTextAreaChanged('email')}
            type="text"
            placeholder="Email Address"
          >
            {email}
          </textarea>
        </div>
        <div>
          <label>How can we help you?</label>
          <br />
          <Ul unstyled>
            <Li>
              <Checkbox
                onChange={this.handleCheckboxChanged(
                  'interestedInDigitalSolutions'
                )}
                checked={interestedInDigitalSolutions}
              />{' '}
              Digital solutions
            </Li>
            <Li>
              <Checkbox
                onChange={this.handleCheckboxChanged('interestedInTraining')}
                checked={interestedInTraining}
              />{' '}
              Training
            </Li>
            <Li>
              <Checkbox
                onChange={this.handleCheckboxChanged(
                  'interestedInBothDigitalSolutionsAndTraining'
                )}
                checked={interestedInBothDigitalSolutionsAndTraining}
              />{' '}
              Both!
            </Li>
          </Ul>
        </div>
        <div>
          <label>Would you like to give more detail? Feel free!</label>
          <br />
          <textarea
            onChange={this.handleTextAreaChanged('message')}
            type="message"
            placeholder="Message"
          >
            {message}
          </textarea>
        </div>

        <div>
          <Checkbox
            onChange={this.handleCheckboxChanged('allowMarketing')}
            checked={allowMarketing}
          />
          <label>
            We do not spam - ever. But, if you're up for it, we'd love to tell
            you about any cool new services or offers that we've got going on.
            Interested? Tick the box! Not sure, here's our{' '}
            <Link>Privacy Policy</Link>
          </label>
        </div>

        <button disabled={isInvalid} type="submit">
          Send
        </button>

        {error && <p>{error.message}</p>}
      </form>
    )
  }
}

export default ContactForm
