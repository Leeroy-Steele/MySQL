
let express = require("express")
let application = express()


const mysql = require('mysql');
const dbConfig = require('./config/db.config.js');

let port1 = 3000

let cors = require("cors")  //stops browser error (npm install cors)
application.use(cors())

application.use(express.json());// to access body from postman


//////// MySQL starts here


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

