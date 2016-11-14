var express = require('express');
var compression = require('compression');

var app = express();
app.use(compression());
app.use(express.static('build'));

app.listen(process.env.PORT || 3000);
