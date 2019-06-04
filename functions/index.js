const functions = require('firebase-functions')
const admin = require('firebase-admin')
const fetch = require('node-fetch')

admin.initializeApp(functions.config().firebase)

exports.sendEmail = functions.database
  .ref('/contactSubmissions/{name}')
  .onWrite((snap, context) => {
    // console.log('snap val', snap.after.val())
    const AUTOPILOT_API_KEY = functions.config().autopilot.key

    fetch(`https://api2.autopilothq.com/v1/contact`, {
      method: 'POST',
      headers: {
        autopilotapikey: AUTOPILOT_API_KEY,
      },
      body: JSON.stringify({
        contact: {
          Email: snap.after.val().email,
          LeadSource: 'LeanJS website',
          _autopilot_list: 'contactlist_422dc7f5-9be5-425c-ab35-c19177d80d89',
          custom: {
            'boolean--UX--Interest': snap.after.val().uxDesign,
            'boolean--React--Interest': snap.after.val().react,
            'boolean--GraphQL--Interest': snap.after.val().graphQL,
          },
        },
      }),
    })
      .then(res => res.json())
      .then(json => console.log(json))
      .catch(console.log('something went wrong'))

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
