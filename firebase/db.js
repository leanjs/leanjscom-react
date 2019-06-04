import { db } from './firebase'

// Save message from contact form  in realtime db

export const doCreateMessage = (
  name,
  email,
  message,
  uxDesign,
  react,
  graphQL,
  allowMarketing
) =>
  db.ref(`contactSubmissions/${name}`).set({
    email,
    message,
    uxDesign,
    react,
    graphQL,
    allowMarketing,
  })
