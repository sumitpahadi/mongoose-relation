const express=require("express")
const client=require("./mongoose/connection")
const routes=require("./routes/route")
const app=express()
const port=4000;
app.use(express.json())
app.use("/",routes)
const connection =async()=>{
   await client("mongodb://localhost:27017/relation")

   app.listen(port,()=>{
       console.log("server is running on port number",port)
   })

}
connection()