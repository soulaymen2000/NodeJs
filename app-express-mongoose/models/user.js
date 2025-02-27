const mongoose=require('mongoose');
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:Number
})
module.exports=mongoose.model('User',UserSchema);