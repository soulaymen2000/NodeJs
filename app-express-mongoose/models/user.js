const mongoose=require('mongoose');
const bcryptjs=require('bcryptjs');
const UserSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:Number,
    password:{
        type:String,
        required:true

    }
    
})
UserSchema.pre('save',async (next)=>{
    if(!this.isModified('password')){
        return next();
    }
module.exports=mongoose.model('User',UserSchema);