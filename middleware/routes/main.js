const express = require('express')
const router= express.Router();


router.get('/getusers', (req, res)=>{
    const user=[
        {id:1, name:"sajjad",email:"sajjad@gmail.com"},
        {id:2, name:"ishaq",email:"ishaq@gmail.com"},
        {id:3, name:"luqman",email:"luqman@gmail.com"},
    ]
    res.send({
        success:200,
        user
    })
});






module.exports = router