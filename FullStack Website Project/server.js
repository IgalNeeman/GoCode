const express = require('express');
var app = express();

app.use(express.static(__dirname));

let port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`server started on port ${port} `)})

//process