const express = require('express');

const app = express()   //creates express app

//Listen to requests, a specific port number
app.listen(4000, ()=>{
    console.log('listening on port 4000')
})