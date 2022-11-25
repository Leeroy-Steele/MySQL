let DBServices = require('../Services/DBServices')

const getData = async (req,res)=>{
    console.log("controller here")

    let data = await DBServices.getAllStudents(res)
    console.log(data)
    res.send(data)

}

module.exports = {getData}
































// const getOneDataEntry = async (req,res,name)=>{
//     console.log("controller here")

//     let data = await dbMiddleware.getOneDataEntry(req,res,name)

//     console.log('Data recieved')
   
//     // console.log(data)

//     // res.send(data)

// }

// const changeOneEntryName = async (req,res)=>{
//     console.log("controller here")

//     await dbMiddleware.changeOneEntryName(req,res)

//     console.log('Data recieved')
// }


// const deleteEntry = async (req,res)=>{
//     console.log("delete entry controller here")

//     await dbMiddleware.deleteEntry(req,res)
//     // let bodyData = req.body.hello
    
//     // console.log(bodyData)
//     // res.send(bodyData)

//     console.log('Finished')
// }

// const createNewEntry = async (req,res)=>{
//     console.log("new entry controller here")

//     await dbMiddleware.createNewEntry(req,res)
//     // let bodyData = req.body.hello
    
//     // console.log(bodyData)
//     // res.send(bodyData)

//     console.log('Data recieved')
// }

// module.exports = {getData,getOneDataEntry,changeOneEntryName,createNewEntry,deleteEntry}
