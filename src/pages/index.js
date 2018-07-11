import React from 'react'
import Link from 'gatsby-link'
import ContactForm from '../components/ContactForm'

const IndexPage = () => (
  <div>
    <h1>Hi asdas</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <ContactForm />
  </div>
)

export default IndexPage
