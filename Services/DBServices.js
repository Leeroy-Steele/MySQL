
const sql = require("../index")


let getAllStudents = async (res)=>{
    console.log("db services here")

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM students`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(JSON.parse(JSON.stringify(result))));
        });
    });
 
    
}

module.exports = {getAllStudents}
































// let getOneDataEntry = async (req,res,name)=>{
//     console.log("dbMiddleware here")

//     const student = await studentmodel.findOne({ name : name }).exec();

//     try {
        
//         let upperCaseName = student.name.toUpperCase()
//         student.name = upperCaseName
        
//         res.send(student);
        
//     } catch (error) {
//         res.status(500).send(error);
//         console.log("nope")
//     }
    
// }

// let changeOneEntryName = async(req,res)=>{
//     console.log("dbMiddleware here")
//     let entryName = req.params.entryName
//     let updatedName = req.params.updatedName

//     console.log(entryName,updatedName)

//     const query = { name: entryName };

//     try {
//         await studentmodel.findOneAndUpdate(query, { name: updatedName })
//         res.send(updatedName);
        
//     } catch (error) {
//         res.status(500).send(error);
//         console.log("nope")
//     }
    
// }


// let deleteEntry = async(req,res)=>{
//     console.log("delete dbMiddleware here")
//     let entryName = req.params.entryName

//     console.log(entryName)

//     try {
//         console.log("try block here")
//         await studentmodel.deleteOne({ name: entryName })
//         console.log('Deleted')
//         res.send(entryName);
        
//     } catch (error) {
//         res.status(500).send(error);
//         console.log("catch block here")
//     }
    
// }

// let createNewEntry = async (req,res)=>{
//     console.log("create new entry middleware function here")

//     let _id = req.body['_id']
//     let name = req.body['name']
//     let email = req.body['email']
//     let city = req.body['city']
//     let phone = req.body['phone']
//     let postcode = req.body['postcode']

//     try {
//         await studentmodel.create({ 
//             "_id": _id,
//             "name": name,
//             "email": email,
//             "city":city,
//             "phone":phone,
//             "postcode":postcode
//         })
//         res.send({"entry":"created"});
        
//     } catch (error) {
//         res.status(500).send(error);
//         console.log("nope")
//     }

// }

// module.exports = {getDataEntry,getOneDataEntry,changeOneEntryName,createNewEntry,deleteEntry}