console.log("start of backend");

require('dotenv').config()


const express = require('express')
const app = express()
const port = 3000

const githubData= {
  "login": "sandipmalii",
  "id": 128310990,
  "node_id": "U_kgDOB6Xezg",
  "avatar_url": "https://avatars.githubusercontent.com/u/128310990?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/sandipmalii",
  "html_url": "https://github.com/sandipmalii",
  "followers_url": "https://api.github.com/users/sandipmalii/followers",
  "following_url": "https://api.github.com/users/sandipmalii/following{/other_user}",
  "gists_url": "https://api.github.com/users/sandipmalii/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/sandipmalii/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/sandipmalii/subscriptions",
  "organizations_url": "https://api.github.com/users/sandipmalii/orgs",
  "repos_url": "https://api.github.com/users/sandipmalii/repos",
  "events_url": "https://api.github.com/users/sandipmalii/events{/privacy}",
  "received_events_url": "https://api.github.com/users/sandipmalii/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Sandip Mali",
  "company": null,
  "blog": "",
  "location": null,
  "email": null,
  "hireable": null,
  "bio": null,
  "twitter_username": "sannmalli",
  "public_repos": 19,
  "public_gists": 0,
  "followers": 1,
  "following": 0,
  "created_at": "2023-03-19T16:06:00Z",
  "updated_at": "2024-03-13T16:01:29Z"
}


app.get('/', (req, res) => {
  res.send('Hello World!, I am starting from Today 13-03-2024')
})
app.get('/twitter',(req,res) => {
    res.send('sannmalli')
} )
app.get('/login',(req,res)=>{
    res.send('<h1> Please Login here</h1>')
} )

app.get('/youtube',(req, res) =>{
    res.send('<h2> Dim Vlogs</h2>')
})

app.get('/github',(req, res) =>{
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})