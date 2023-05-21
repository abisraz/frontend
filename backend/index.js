const express = require('express');
const app= express();
 const port=5000;

 const userRouter =require('./routers/userRouter');
 const equipmentRouter =require('./routers/equipmentRouter');


 const cors = require('cors');
// const equipmentModel = require('./models/equipmentModel');

 app.use(cors({
   origin:['http://localhost:3000'],
 }));

 app.use(express.json());

 app.use('/user',userRouter);
 app.use('/equipment',equipmentRouter);



 app.get('/',(req,res)=>{
    res.send('Working Perfectly')
 });
 app.get('/add',(req,res)=>{
    res.send('Responce from add')
 });
 app.get('/getall',(req,res)=>{
    res.send('Responce from getall')
 });
 app.get('/update',(req,res)=>{
    res.send('Responce from update')
 });

 app.listen(port,()=>{console.log('server started');});