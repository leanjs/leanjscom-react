import 'whatwg-fetch'

const apiBaseUrl = 'https://us-central1-leanjscom-web.cloudfunctions.net/'

const defaultOptions = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
}

export function sendMessage(message) {
  return fetch(`${apiBaseUrl}sendMessage`, {
    ...defaultOptions,
    body: JSON.stringify(message),
  })
}
