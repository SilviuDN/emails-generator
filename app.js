require("dotenv/config");

const faker = require('faker')

const HOST = process.env.MYSQL_HOST
const PASSWORD = process.env.MYSQL_PASSWORD
const USER = process.env.MYSQL_USER
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: 'users_emails'
})

// **************************************************************************************************************
// INSERTING 500 RANDOM emails -- WITH ARRAYS
// **************************************************************************************************************
const q7 = `INSERT INTO users (email, created_at) VALUES ?`

const arr = []

for(let i=0; i<500 ; i++){
  let fakeUser = [ faker.internet.email(),faker.date.past() ]
  arr.push( fakeUser )
}

let result = connection.query( q7, [arr], (error, results) => {
  if(error) throw error
  console.log(results)
})


connection.end()
