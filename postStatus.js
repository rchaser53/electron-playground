const axios = require('axios')

const owner = 'rchaser53'
const repo = 'electron-playground'
const sha = 'git commit sh'
const password = 'git login password' 

const url = `https://api.github.com/repos/${owner}/${repo}/statuses/${sha}`

axios.post(url, {
  "state": "success"
}, {
  headers: {
    'Content-type': 'application/json'
  },
  auth: {
    username: owner,
    password
  },
}).then((ret) => {
  console.log(ret)
}).catch((err) => {
  console.error(err)
})