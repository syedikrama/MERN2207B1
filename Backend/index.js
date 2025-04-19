let express = require('express');
require('dotenv').config();
let db_var = require('./Database');
let route = require('./Route/User_route');
let cors = require('cors')

let port_no = process.env.PORT;
let myapp = express();

myapp.use(cors());
myapp.use(express.json());
myapp.use('/gymfit/',route)


db_var().then(()=>{
    myapp.listen(port_no,()=>{
        console.log(`Server started at http://localhost:${port_no}`)
    })
}).catch((e)=>{
    console.log(e);
})