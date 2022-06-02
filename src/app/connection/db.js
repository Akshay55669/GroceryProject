const db = require('./database')

db.connect();

let qr = `Select * from public."User"`
db.query(qr, (err, res) => {
    if (!err) {
        console.log(res.rows);
    } else {
        console.log(err.message);
    }
    db.end;
})