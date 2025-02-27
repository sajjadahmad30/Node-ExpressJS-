const express = require('express')
const app = express();
const getusers= require('./routes/main')



app.use((req,res, next)=>{
    const time = new Date().toISOString();
    console.log(`This is ${req.method} method and the url is : ${req.url} time ${time} `)
    next()
})

app.get('/getusers',getusers)


const port = 1122;
app.listen(port,()=>{
    console.log(`listening on port ${port}.`)
})