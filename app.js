const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const { usermodel } = require("./models/user.js")

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect("mongodb+srv://feb:febin4475@cluster0.pydodfi.mongodb.net/UserDb?retryWrites=true&w=majority&appName=Cluster0")


app.post("/", (req, res) => {
    res.send("test")
})
app.post("/add", (req, res) => {
    let input = req.body
    let user = new usermodel(input)
    user.save()
    res.json({ "status": "Success" })


})
app.get("/view", (req, res) => {
    usermodel.find().then((data)=>{res.json(data)}).catch((error)=>{res.json(error)})
    // res.send("test")
})
// app.post("/",(req,res)=>{
//     res.send("test")
// })



app.listen(8081,()=>{
    console.log("Server Started")
})
