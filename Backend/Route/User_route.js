let express = require('express');
let route = express.Router();
let user_logic = require('../Controller/User_logic');

route.post('/user', user_logic.register );

module.exports = route;
