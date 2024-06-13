const mongoose=require("mongoose")
const schema=mongoose.Schema(
    
        {
            "name":String,
            "age":Number,
            "dob":String,
            "parent":String,
            "weight":Number,
            "address":String,
            "adar":Number,
            "phone":Number,
            "username":Number,
            "pass":Number,
            "confpass":Number
            
        }
    
)
let studmodel=mongoose.model("students",schema);
module.exports={studmodel}