const express = require('express')
const jwt = require('jsonwebtoken');
const secretKey = "secretkey";
const app = express();

app.get('/', (req, res)=>{
    res.json({message:'simple api'})
});


app.post('/login', (req,res)=>{
    const user ={
        id:1,
        name:'sajjad',
        email: 'sajjad@gmail.com'
    }
    jwt.sign({user}, secretKey , {expiresIn: "300s"}, (err, token)=>{
        res.json({
            token
        })
    })
});


app.post("/profile", verifyToken, (req, res)=>{
    jwt.verify(req.token,secretKey,(err, authData)=>{
        if(err){
            res.send({ result: "invalid token" })
        }
        else{
            res.send({
                message : "Profile accessed successfully",
                authData  
            })
        }
    })
} ) 

function verifyToken(req, res, next){
    const bearerHeaders = req.headers["authorization"];

    if(typeof bearerHeaders !== 'undefined'){
        const bearer= bearerHeaders.split(" ")
        const token = bearer[1]
        req.token = token
        next();
        
    }else{
        res.send({
            result:"Token is not valid."
        })
    }

}



app.listen(9000, ()=>{
    console.log("listening on port 9000")
})