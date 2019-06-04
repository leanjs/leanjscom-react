const functions = require('firebase-functions')
const admin = require('firebase-admin')
const fetch = require('node-fetch')

admin.initializeApp(functions.config().firebase)

exports.sendEmail = functions.database
  .ref('/contactSubmissions/{name}')
  .onWrite((snap, context) => {
    console.log('snap val', snap.after.val())
    const slackURL =
      'https://hooks.slack.com/services/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'
    fetch(slackURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: `:tada: New contact :tada:\n\nEmail: ${
          snap.after.val().email
        }\n Message: ${snap.after.val().message}\nInterested In UX: ${
          snap.after.val().uxDesign
        }\nInterested In React: ${
          snap.after.val().react
        }\nInterested In GraphQL: ${
          snap.after.val().graphQL
        }\nAllow Marketing: ${snap.after.val().allowMarketing}`,
      }),
    })
  })
