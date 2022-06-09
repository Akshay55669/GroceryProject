const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

const db = require('../connection/database')

const app = express();

app.use(cors());
app.use(bodyparser.json());

// port connection
app.listen(3000, () => {
    console.log('Server Running');
})

// database Connection
db.connect(err => {
    if (err) { 
        console.log('err'); 
    }
    console.log('database Connected....');
})

// Get all data
app.get('/data', (req, res) => {
    let qr = `Select * from public."Grocery"`
    db
        .query({
            text: qr
        })
        .then(result => {
            
            var data1 = []; 
            for (var i = 0; i < result.rows.length; i++) {
                data1.push({
                    Id: result.rows[i].Id,
                    Name: result.rows[i].Name,
                    Price: result.rows[i].Price,
                    Image: result.rows[i].Image,
                    Category:result.rows[i].Category
                });
            }
            res.send(
                data1
            );
        })
        .catch(err => console.log(err, 'errs'));
});

// post User Data
app.post('/data', (req, res) => {
    let qr = `Select * from public."Grocery"`
    db
        .query({
            text: qr
        })
        .then(result => {
            
            var data1 = []; 
            for (var i = 0; i < result.rows.length; i++) {
                data1.push({
                    Id: result.rows[i].Id,
                    Name: result.rows[i].Name,
                    Price: result.rows[i].Price,
                    Image: result.rows[i].Image,
                    Category:result.rows[i].Category
                });
            }
            res.send(
                data1
            );
        })
        .catch(err => console.log(err, 'errs'));
});



