const express=require('express');
const app=express();
const todos=[];
app.use(express.json());
app.get('/api/all',(req,res)=>{
    res.send(todos);
});
app.post('/api/add',(req,res)=>{

    const data =todos.push(req.body);
    console.log(data);
    res.send(data);
});
app.get('/',(req,res)=>{
    res.send('Hello World')//accept all response
    res.json({message :"hello jason"}) //accept json response
    res.end({message :"hello end"}) //send  response skip the rest
});

app.get('/file',(req,res)=>{
    res.sendFile(__dirname+'/public/index.html')
});
app.listen(5000,()=>{console.log('Server is running on port 5000')});