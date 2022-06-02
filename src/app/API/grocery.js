const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');

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
// module.get=(app.get);

app.get('/data', (req, res) => {
    let qr = `Select * from public."Grocery"`
    db
        .query({
            // rowMode: "array",
            text: qr
        })
        .then(result => {
            
            var data1 = []; 
            for (var i = 0; i < result.rows.length; i++) {
                data1.push({
                    Id: result.rows[i].Id,
                    Name: result.rows[i].Name,
                    Price: result.rows[i].Price,
                    Image: result.rows[i].Image
                });
            }
            // console.log(result);
            // if(result.length > 0)
            // {
            // console.log(result.rows[0].Name);
            res.send(
                // message: 'all user data',
                // data: result.rows
                data1
            );
            // }
        })
        .catch(err => console.log(err, 'errs'));
});



app.listen(3000, () => {
    console.log('Server Running');
})