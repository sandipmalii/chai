console.log("start of backend");

require('dotenv').config()


const express = require('express')
const app = express()
const port = 3000

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

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})