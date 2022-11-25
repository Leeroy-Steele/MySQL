
let express = require("express")    // npm install expressjs
let application = express()

let port1 = 3000

let cors = require("cors")  //stops browser error (npm install cors)
application.use(cors())

application.use(express.json());// to access body from postman

//////// MySQL starts here

const mysql = require('mysql');// add mySQL into project (npm install mysql) 
const dbConfig = require('./config/db.config.js');

var connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB
});

module.exports = connection;

/////// routing / webserver starts here

let studentRoute = require('./Routes/studentRoute')

application.use('/students',studentRoute)

application.listen(port1,()=>{console.log(`Server running on http://localhost:${port1}`)})

