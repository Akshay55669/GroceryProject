const express = require('express');
const bodyparser=require('body-parser');
const cors =require('cors');

const db = require('../connection/database')

const app = express();

app.use(cors());
app.use(bodyparser.json());

// Connection
db.connect(err => {
    if (err) { console.log('err'); }
    console.log('database Connected....');
})

// Get all data

app.get('/user', (req, res) => {
    let qr = `Select * from public."User"`
    db
        .query({
            rowMode: "array",
            text: qr
        })
        .then(result => {
            // console.log(result);
            // if(result.length > 0)
            // {
            res.send({
                message: 'all user data',
                data: result.rows
            });
            // }
        })
        .catch(err => console.log(err, 'errs'));
    });

    // db.query(rowMode="array", qr, (err, result) => {
    //     if (err) {
    //         console.log(err, 'errs');
    //     }
    //     else (result.length > 0)
    //     {
    //         res.send({
    //             message: 'all user data',
    //             data: result.rows

    //         });
    //     }
    // });


// Get single Data

app.get('/user/:Id', (req, res) => {
    let gID = req.params.Id;
    let qr = `Select * from public."User" where "Id"=${gID}`;
    db
    .query({
        rowMode: "array",
        text: qr
    })
    .then(result => {
        res.send({
            message: 'get single data',
            data: result.rows
        });
    })
    .catch(err => console.log(err, 'errs'));
});


















app.listen(3000, () => {
    console.log('Server Running');
})