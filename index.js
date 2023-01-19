const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const data = require('./data.json')


app.get('/',(req,res)=>{
    res.send('Vercel server is running')
})
app.get('/data',(req,res)=>{
    res.send(data)
})
app.listen(port,()=>
console.log('app is running'))