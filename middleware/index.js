const express = require('express')
const app = express();
const getusers= require('./routes/main');
const errorHandling = require('./routes/errorHandlingMiddlewware');



app.use((req,res, next)=>{
    const time = new Date().toISOString();
    console.log(`This is ${req.method} method and the url is : ${req.url} time ${time} `)
    next()
})

// errorHandling middleware 
app.get('/getusers',getusers)


// errorhandling middleware 
app.get("/", (req, res, next)=>{
    const error = new Error("Something went wrong.")
    error.statusCode = 404;
    error.status = 'Not found',
    next(next)
})

app.use(errorHandling)

const port = 1122;
app.listen(port,()=>{
    console.log(`listening on port ${port}.`)
})