const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./configuration/config');
const routers = require('./routers/staff');
// const pool = require('./configuration/config');

// pool.query(`select * from Teachers`, (req,res,fields)=>{
//     console.log('success', res);
// })

db.sequelize.authenticate().then(() => {
    console.log('Successfully connected');
 }).catch((error) => {
    console.log('Error', error);
 });
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(
  cors({
    origin: process.env.ALLOWED_ORIGIN
  })
);
db.sequelize.sync().then(() => {
    app.use(routers);
});

app.listen((process.env.PORT || 7000), (req, res)=>{
    console.log('Running Successfully');
});