let mongoose = require('mongoose');
require('dotenv').config();
let db_url = process.env.DB_URL;

let check_db = async function(){
    try {
         mongoose.connect(db_url).
        then(()=>{
            console.log('Database Connected')
        })
    } catch (error) {
        console.log(error)
    }
}
module.exports = check_db;