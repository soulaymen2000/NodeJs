const express=require('express');
const router=express.Router();
const User=require('../models/user');
router.post('/register',async(req,res)=>{
    try{
        const user=new User(req.body);
        await user.save();
        res.status(201).send({Message: 'User created successfully', user});
        
        

    }catch(err){
        res.status(500).send({message : err});
    }
})
router.get('/all',async(req,res)=>{
    try{
        const users=await User.find();
        res.status(200).send(users);
    }catch(err){
        res.status(500).send({message:err});
    }
})
router.get('/find:name',async(req,res)=>{
    try{
        const user=await User.findOne({name:req.params.name});
        res.status(200).send(user);
    }catch(err){
        res.status(404).send({message:err});
    }
})
router.get('/find:id',async(req,res)=>{
    try{
        
        const user=await User.findById(req.params.id);
        res.status(200).send(user);
    }catch(err){
        res.status(404).send({message:err});
    }
})
router.patch('/update:id',async(req,res)=>{
    try{
        await User.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).send({message:'User updated successfully'});
    }catch(err){
        res.status(404).send({message:err});
    }
})
router.delete('/delete:id',async(req,res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).send({message:'User deleted successfully'});
    }catch(err){
        res.status(500).send({message:err});
    }
}
)
    
module.exports=router;