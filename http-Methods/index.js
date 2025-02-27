const express = require('express')
const app = express();
const studentData = require('./data.json')

// middleware 
app.use(express.json())
app.get('/', (req, res)=>{
    res.send('This is home page.')
})
app.get('/allusers', (req, res)=>{
    res.json(studentData)
})


// post request 
app.post('/adduser', (req, res)=>{

    if(!req.body.email){
        return res.status(400).json({error: 'Please enter a valid email address...'})
    }

    const user={
        id : studentData.length+1,
        first_name : req.body.first_name,
        last_name : req.body.lastt_name,
        email : req.body.email,
        gender: req.body.gender,
        ip_address: req.body.ip_address
    }
    studentData.push(user);
    res.json(user)
})

app.get('/studentdata', (req, res)=>{
    res.send(studentData)
})



// update request
app.put("/updateuser/:id",(req,res)=>{
    let id = req.params.id;
    let first_name =req.body.first_name;
    let last_name =req.body.last_name;
    let email =req.body.email;
    let gender =req.body.gender;
    let ip_address =req.body.ip_address;

    let index  = studentData.findIndex((user)=>{
        return (user.id == Number.parseInt(id))
    })

    if(index >= 0){
        let std = studentData[index];
        std.first_name=first_name;
        std.last_name=last_name;
        std.email=email;
        std.gender=gender;
        std.ip_address=ip_address;

        res.json(std)
    }else{
        res.json(404)
        res.end()
    }
});



// delete request 
app.delete('/deleteuser/:id', (req,res)=>{
    let id= req.params.id;

    let index = studentData.findIndex((user)=>{
        return (user.id == Number.parseInt(id));
    });

    if(index >= 0){
        let std = studentData[index];
        studentData.splice(index, 1);
        res.json(std)
    }else{
        res.status(404)
    }
})


const port = 9000;
app.listen(port, ()=>{
    console.log(`listening on port:${port} `)
})