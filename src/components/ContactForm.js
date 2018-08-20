import React, { Component } from 'react'
import { db } from '../../firebase'
import Ul, { Li } from './layout/Ul'
import Checkbox from './form/Checkbox'
import TextArea from './form/TextArea'
import { P } from './text'
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
      return <P>Thank you for your submission! We will be in touch shortly.</P>
    }

    const isInvalid = message === '' || email === ''

    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>Name</label>
          <br />
          <TextArea
            onChange={this.handleTextAreaChanged('name')}
            type="text"
            placeholder="Name"
          >
            {name}
          </TextArea>
        </div>
        <div>
          <label>Phone number or email address</label>
          <br />
          <TextArea
            onChange={this.handleTextAreaChanged('email')}
            type="text"
            placeholder="Email Address"
          >
            {email}
          </TextArea>
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
                label="Digital solutions`"
              />
            </Li>
            <Li>
              <Checkbox
                onChange={this.handleCheckboxChanged('interestedInTraining')}
                checked={interestedInTraining}
                label="Training"
              />
            </Li>
            <Li>
              <Checkbox
                onChange={this.handleCheckboxChanged(
                  'interestedInBothDigitalSolutionsAndTraining'
                )}
                checked={interestedInBothDigitalSolutionsAndTraining}
                label="Both!"
              />
            </Li>
          </Ul>
        </div>
        <div>
          <label>Would you like to give more detail? Feel free!</label>
          <br />
          <TextArea
            onChange={this.handleTextAreaChanged('message')}
            type="message"
            placeholder="Message"
          >
            {message}
          </TextArea>
        </div>

        <div>
          <Checkbox
            onChange={this.handleCheckboxChanged('allowMarketing')}
            checked={allowMarketing}
            label={
              <label>
                We do not spam - ever. But, if you're up for it, we'd love to
                tell you about any cool new services or offers that we've got
                going on. Interested? Tick the box! Not sure, here's our{' '}
                <Link>Privacy Policy</Link>
              </label>
            }
          />
        </div>

        <Button disabled={isInvalid} type="submit">
          Send
        </Button>

        {error && <p style={{ color: 'red' }}>{error.message}</p>}
      </form>
    )
  }
}

export default ContactForm
