let DBServices = require('../Services/DBServices')

const getData = async (req,res)=>{
    console.log("controller here")

    let data = await DBServices.getAllStudents(res)
    console.log(data)
    res.send(data)

}

const getStudentDataByID = async (req,res)=>{
    console.log("controller here")

    let data = await DBServices.getStudentByID(req,res)
    console.log(data)
    res.send(data)

}

const updateByID = async (req,res)=>{
    console.log("controller here")

    let data = await DBServices.updateByID(req,res)
    console.log(data)
    res.send(data)

}

const deleteByID = async (req,res)=>{
    console.log("controller here")

    let data = await DBServices.deleteByID(req,res)
    console.log(data)
    res.send(data)

}

const newEntry = async (req,res)=>{
    console.log("controller here")

    let data = await DBServices.newEntry(req,res)
    console.log(data)
    res.send(data)

}

module.exports = {getData,getStudentDataByID,updateByID,deleteByID,newEntry}


