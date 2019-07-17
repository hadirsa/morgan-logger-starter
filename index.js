const morgan = require('morgan'); 
const fs = require('fs');
const path=require('path');


const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

var accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'), {flags: 'a'}
);
// setup the logger 
app.use(morgan('combined', {stream: accessLogStream}));
