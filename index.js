require('dotenv').config() // for port

const express = require('express')
const app = express()
const port = 4000

const github={
          "login": "Subhayan009kapas",
          "id": 146696573,
          "node_id": "U_kgDOCL5pfQ",
          "avatar_url": "https://avatars.githubusercontent.com/u/146696573?v=4",
          "gravatar_id": "",
          "url": "https://api.github.com/users/Subhayan009kapas",
          "html_url": "https://github.com/Subhayan009kapas",
          "followers_url": "https://api.github.com/users/Subhayan009kapas/followers",
          "following_url": "https://api.github.com/users/Subhayan009kapas/following{/other_user}",
          "gists_url": "https://api.github.com/users/Subhayan009kapas/gists{/gist_id}",
          "starred_url": "https://api.github.com/users/Subhayan009kapas/starred{/owner}{/repo}",
          "subscriptions_url": "https://api.github.com/users/Subhayan009kapas/subscriptions",
          "organizations_url": "https://api.github.com/users/Subhayan009kapas/orgs",
          "repos_url": "https://api.github.com/users/Subhayan009kapas/repos",
          "events_url": "https://api.github.com/users/Subhayan009kapas/events{/privacy}",
          "received_events_url": "https://api.github.com/users/Subhayan009kapas/received_events",
          "type": "User",
          "site_admin": false,
          "name": "Subhayan Kapas",
          "company": null,
          "blog": "",
          "location": "Jaipur , Rajasthan  //  Ghatal  , Paschim Medinipur ,  West Bengal",
          "email": null,
          "hireable": null,
          "bio": "Life =\"Maa + Code\"",
          "twitter_username": null,
          "public_repos": 29,
          "public_gists": 0,
          "followers": 1,
          "following": 2,
          "created_at": "2023-10-02T05:10:24Z",
          "updated_at": "2024-07-29T07:00:48Z"
        }


app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/twitter' ,(req,res)=>{
  res.send("SubahaynKapas009")
})
app.get('/github',(req, res)=>{
          res.json(github)
})

app.get('/login' ,(req, res)=>{
          res.send("<h1>Please Login to my Site</h1>")
})

app.get('/youtube',(req,res)=>{
          res.send("<h2>Let' start with backend</h2>")
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})