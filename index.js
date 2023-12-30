const express=require('express');
const app=express();
const server=require('http').createServer(app);
const {config}=require('dotenv');
config()
const {PORT}=process.env;
const expressEjsLayouts=require('express-ejs-layouts');
const { AllRoutes } = require('./routes/routes');

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.set('view engine','ejs');
app.use(expressEjsLayouts);
app.set('views','views');
app.set('layout','./layouts/master');
app.use(AllRoutes)
app.use((req,res,next)=>{
    return res.status(404).json({
        statusCode:404,
        message:"Not Founded!"
    })
})
app.use((err,req,res,next)=>{
    return res.status(err.status).json({
        statusCode:err.status || 500,
        message:err.message ||'Somthing error'
    })
})
server.listen(PORT,()=>console.log('Server run http://localhost:3000'))