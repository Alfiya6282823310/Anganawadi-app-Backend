const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const {studmodel}=require("./models/students")

const app=express()
app.use(cors())
app.use(express.json())
 mongoose.connect("mongodb+srv://alfiyakn:alfiyakn@cluster0.l8relji.mongodb.net/anganawadidb?retryWrites=true&w=majority&appName=Cluster0")

app.post("/",(req,res)=>{
    let input=req.body
    let stud=new studmodel(input)
    stud.save()
    console.log(stud)
    res.json({"status":"success"})
})

app.post("/view",(req,res)=>{
    studmodel.find().then(
        (data)=>{
            res.json(data)
        }
    ).catch(
        (error)=>{
            res.json(error)
        }
    )
})

app.listen(8086,()=>{
    console.log("server started")

})