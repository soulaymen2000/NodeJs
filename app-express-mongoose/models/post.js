const mongoose=require('mongoose');
const user = require('./user');
const PostSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    content:{
        type:String,
        required:true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'
    }
})
const Post=mongoose.model('Post',PostSchema);
module.exports=Post;