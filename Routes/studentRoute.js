var express = require('express');
var router = express.Router();

var studentController = require('../Controllers/studentController')    //grabs the controller

router.get('/all',(req,res)=>{
    console.log("router here")
    studentController.getData(req,res)
})

module.exports = router;


































// router.get('/one/:name',(req,res)=>{
//     console.log("router one here")
//     let name = req.params.name
//     // console.log(name)
//     studentController.getOneDataEntry(req,res,name)
//     // res.send(name)
// })

// router.get('/changeOneEntryName/:entryName/:updatedName',(req,res)=>{
//     console.log("router change one name here")

//     studentController.changeOneEntryName(req,res)

// })

// router.get('/deleteOneEntry/:entryName',(req,res)=>{
//     console.log("delete router here")

//     studentController.deleteEntry(req,res)

// })

// router.get('/createNewEntry',(req,res)=>{
//     console.log("router one here")

//     studentController.createNewEntry(req,res)

// })


