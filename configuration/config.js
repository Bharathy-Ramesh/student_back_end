const dotenv = require('dotenv');
const {Sequelize, DataTypes} = require('sequelize');
dotenv.config();
const db = {};
db.sequelize = new Sequelize(
 'db_studentportal',
 'root',
 'Bharathy@2998',
 {
        host:'localhost',
        dialect: 'mysql'
 });
// const mysql = require('mysql');
// const pool = mysql.createPool({
//     host: process.env.DB_HOST || 'localhost',
//     user: process.env.DB_USERNAME || 'root',
//     database: process.env.DB_DATABASE_NAME,
//     password: process.env.DB_PASSWORD || ''
// });
// pool.query(`select * from teachers`, (err,res,fields)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log('vetri');
//     }
// })
db.dataTypes = DataTypes;
module.exports = db;