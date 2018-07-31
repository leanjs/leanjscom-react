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
        text: `Email: ${snap.after.val().email}\n Message: ${
          snap.after.val().message
        }\nInterested In Digital Solutions: ${
          snap.after.val().interestedInDigitalSolutions
        }\nInterested In Training: ${
          snap.after.val().interestedInTraining
        }\nInterested In Both Digital Solutions And Training: ${
          snap.after.val().interestedInBothDigitalSolutionsAndTraining
        }\nAllow Marketing: ${snap.after.val().allowMarketing}`,
      }),
    })
  })
