var express = require('express');
var router = express.Router();

var studentController = require('../Controllers/studentController')    //grabs the controller

router.get('/all',(req,res)=>{
    console.log("router here")
    studentController.getData(req,res)
})

router.get('/getByID/:studentID',(req,res)=>{
    console.log("router here")
    studentController.getStudentDataByID(req,res)
})

router.get('/updateByID',(req,res)=>{
    console.log("router here")
    studentController.updateByID(req,res)
})

router.get('/deleteByID',(req,res)=>{
    console.log("router here")
    studentController.deleteByID(req,res)
})

router.get('/newEntry',(req,res)=>{
    console.log("router here")
    studentController.newEntry(req,res)
})

module.exports = router;
