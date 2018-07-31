const functions = require('firebase-functions')
const admin = require('firebase-admin')
const fetch = require('node-fetch')

admin.initializeApp(functions.config().firebase)

exports.sendEmail = functions.database
  .ref('/contactSubmissions/{name}')
  .onWrite((snap, context) => {
    const slackURL =
      'https://hooks.slack.com/services/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'
    fetch(slackURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        text: `email: ${snap.after.val().email}\n message: ${
          snap.after.val().message
        }\n interestedInDigitalSolutions: ${
          snap.after.val().interestedInDigitalSolutions
        }\n interestedInTraining: ${
          snap.after.val().interestedInTraining
        }\n interestedInBothDigitalSolutionsAndTraining: ${
          snap.after.val().interestedInBothDigitalSolutionsAndTraining
        }\n allowMarketing: ${snap.after.val().allowMarketing}`,
      }),
    })
  })
