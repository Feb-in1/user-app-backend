const mongoose=require("mongoose")
const schema=mongoose.Schema(
    {
        "name":String,
        "dob":String,
        "bg":String,
        "mob":String,
        "addr":String,
        "pin":String,
        "dist":String,
        "place":String,
        "em":String,
        "usrnam":String,
        "pass":String,
        "cpass":String
    }
)
let usermodel=mongoose.model("users",schema);
module.exports={usermodel}




