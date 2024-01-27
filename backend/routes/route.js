const routes=require("express").Router()
const {register,right,geting,geted}=require("../controller/usercontroller")
routes.post("/reg",register)
routes.post("/right",right)
routes.get("/get",geting)
routes.get("/g",geted)
module.exports=routes