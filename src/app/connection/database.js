// const {Sequelize} = require("sequelize")

// const sequelize=new Sequelize("CompanyDB","postgres","root",{
//     host:"localhost",
//     dialect:"postgres"
// });

// sequelize.authenticate();
// sequelize.connect();
// sequelize.query(`select * from public."User"`,(err,res)=>{
//     if(!err){
//         console.log(res.rows);
//     }
//     else{
//         console.log(err.message);
//     }
//     sequelize.end;
// })
// const users = sequelize.query(`select * from public."User"`)
// console.log(users);

const { Client } = require('pg')

module.exports = new Client({
  host: "localhost",
  user: "postgres",
  port: 5432,
  password: "root",
  database: "Grocery"
})


// client.connect();
// console.log("succesful");


