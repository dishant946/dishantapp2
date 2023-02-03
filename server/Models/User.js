const mongoose=require('mongoose');
const mongoschema=mongoose.Schema({
    name:{
        type:String,
        required:false
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
});
module.exports = mongoose.model("user",mongoschema);