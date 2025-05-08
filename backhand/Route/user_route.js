let exp = require("express")
let r = exp.Router()
let user_logic = require("../controller/user_logic")

r.post("/user", user_logic.register);
r.get("/user",user_logic.get_all_user);
r.delete("/user/:id",user_logic.delete_user)
r.put("/user/:id",user_logic.update_user)
r.post("/log",user_logic.login_user)


module.exports= r;