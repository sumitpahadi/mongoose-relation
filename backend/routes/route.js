const routes=require("express").Router()
const {register,right,geting}=require("../controller/usercontroller")
routes.post("/reg",register)
routes.post("/right",right)
routes.get("/get",geting)
module.exports=routes