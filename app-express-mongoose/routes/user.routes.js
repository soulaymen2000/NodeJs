const express = require('express')
const User = require('../models/user')
const router = express.Router()

router.post('/',async (req,res)=>{
    try{
        const user = new User(req.body)
        await user.save()
        res.status(201).send({message:'user saved successfully', user})
    } catch (error) {
        res.status(500).send({message:error})
    }
})


router.get('/all',async(req,res)=>{
    try{
        const users = await User.find()
        res.status(200).send({users})
    } catch (error) {
        res.status(500).send({message:error})
    }
})

router.get('/:name',async(req,res)=>{
    try{
        const name = req.params.name
        const users = await User.findOne({name})
        if(users){
            res.status(200).send({users})
        }else{
        res.status(404).send({message:"user not found"})
        }
    } catch (error) {
       
    }
})

router.patch('/update/:id',async(req,res)=>{
    try{
        const users = await User.findById(req.params.id,req.body)
        res.status(200).send({users})
    } catch (error) {
        res.status(500).send({message:error})
    }
})
router.put('/update/:name',async(req,res)=>{
    try{
        const name = req.params.name
        const users = await User
        .findOneAndUpdate({name},req.body,{new:true})
        res.status(200).send({users})
    } catch (error) {
        res.status(500).send({message:error})
    }  
})


router.delete('/delete/:id',async(req,res)=>{
    try{
        const users = await User.findByIdAndDelete(req.params.id)
        res.status(200).send({message:"user deleted successfully"})
    } catch (error) {
        res.status(500).send({message:error})
    }
})
router.delete('/delete/all',async(req,res)=>{
    try{
        const users = await User.deleteMany()
        res.status(200).send({message:"all users deleted successfully"})
    } catch (error) {
        res.status(500).send({message:error})
    }
})
router.delete('/delete/:name',async(req,res)=>{
    try{
        const name = req.params.name
        const users = await User
        .findOneAndDelete({name})
        res.status(200).send({message:"user deleted successfully"})
    } catch (error) {
        res.status(500).send({message:error})
    }
}
)
router.get('/user/:id',async(req,res)=>{
    try{
        const users = await User.findById(req.params.id)
        res.status(200).send({users})
    } catch (error) {
        res.status(500).send({message:error})
    }
})

module.exports = router;