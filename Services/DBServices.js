
const sql = require("../index")


let getAllStudents = async (res)=>{
    console.log("db services all students here")

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM students`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            resolve(Object.values(result));
        });
    });
}

let getStudentByID = async (req,res)=>{
    console.log("db services student by id here")

    let studentID = req.params.studentID
    // console.log(studentID)

    return new Promise((resolve, reject) => {
        let sqlQuery = `SELECT * FROM students where user_id=${studentID}`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            
            resolve(Object.values(result));
        });
    });
}

let updateByID = async (req,res)=>{
    console.log("db services updateByID here")

    let studentID = req.query.id
    let updatedName = req.query.newName
    console.log(studentID)
    console.log(updatedName)

    return new Promise((resolve, reject) => {
        let sqlQuery = `UPDATE students SET name='${updatedName}' where user_id =${studentID}`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            
            resolve(Object.values(result));
        });
    });
}

let deleteByID = async (req,res)=>{
    console.log("db services deleteByID here")

    let studentID = req.query.id

    console.log(studentID)

    return new Promise((resolve, reject) => {
        let sqlQuery = `DELETE FROM students WHERE user_id="${studentID}"`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            
            resolve(Object.values(result));
        });
    });
}

let newEntry = async (req,res)=>{
    console.log("db services newEntry here")

    let user_id = req.body.user_id
    let name = req.body.name
    let email = req.body.email
    let city = req.body.city
    let phone = req.body.phone
    let postcode = req.body.postcode

    console.log(user_id)
    console.log(name)

    return new Promise((resolve, reject) => {
        let sqlQuery = `INSERT INTO students VALUES(${user_id},"${name}","${email}","${city}","${phone}" ,"${postcode}")`;
        
        sql.query(sqlQuery, (err, result, field) => {
            if(err) return reject(err);
            
            resolve(Object.values(result));
        });
    });
}
module.exports = {getAllStudents,getStudentByID,updateByID,deleteByID,newEntry}
