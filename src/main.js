const express=require('express');
const cors=require('cors');
const router =require('./services');
const path=require('path');
const app=express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/api', router);
app.use(express.static( 'public'));
module.exports=app;

