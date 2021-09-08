require("dotenv/config");

const faker = require('faker')

const PASS = process.env.MYSQL_PASS
const mysql = require('mysql')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: PASS,
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
