const functions = require('firebase-functions')
const cors = require('cors')
const express = require('express')
const { WebClient } = require('@slack/web-api')

const slackToken = functions.config().slack.token
const slackBotIconUrl =
  'https://avatars.slack-edge.com/2017-05-14/183274846643_04a16c14f97d4f0554a6_44.png'

const app = express()
app.use(cors({ origin: true }))

app.post('/', (req, res) => {
  const message = req && req.body

  if (!message) {
    res.status(401).send('no message')
  }

  const web = new WebClient(slackToken)
  // See: https://api.slack.com/methods/chat.postMessage
  web.chat.postMessage({
    channel: 'C8MTKU3NC',
    icon_url: slackBotIconUrl,
    text: `:tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada: :tada:
LeanJS Sprint REQUEST ${Object.keys(message).map(
      key => `\n\n*${key}*: ${message[key]}`
    )}
            `,
  })

  res.status(200).send('message sent')
})

exports.sendMessage = functions.https.onRequest(app)
