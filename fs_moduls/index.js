const fs = require('fs');


// create file and write some text 
// fs.writeFileSync('./data.txt', 'hello world!')


// read data.txt file text 
// const result= fs.readFileSync('./data.txt', 'utf8')
// console.log(result)

// or second method async 
// fs.readFile('./data.txt', 'utf-8', (err, result)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(result);
//     }
// })



// add content inside to the existing file
// fs.writeFileSync('./data.txt', "This is new Text...", {flag: "a"})

// append 
// fs.appendFileSync('.data.txt', ' sajjad ahmad khan')


// delete file 
// fs.unlink('data.txt', (err)=>{
//     console.log(err)
// })
