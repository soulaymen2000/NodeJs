const express= require('express');
const app=express();
app.use(express.json());
const mongoose=require('mongoose');
require('dotenv').config();
const userRoutes=require('./routes/user.routes');
app.use('/users',userRoutes);

const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.MONGO_URI).then(()=>{console.log('Connected to MongoDB')}).catch(err=>{console.log('Error:',err)});

app.listen(PORT,()=>{console.log('Server is running on port 5000')});