//Path package to get the correct file path for html
const router= require('express').Router();
const path = require('path');

//Routing


    //HTML Get requests

 router.get('/notes',function(req,res) {
    res.sendFile(path.join(__dirname,'../public/notes.html'));
 });
 
 router.get('/',function(req,res) {
    res.sendFile(path.join(__dirname,'../public/index.html')); 
 });

 //if no match route default to index

 router.get('*',function(req,res) {
    res.sendFile(path.join(__dirname,'../public/index.html')); 
 });
 module.exports = router