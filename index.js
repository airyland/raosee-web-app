var express= require('express');
var app = express();
app.engine('jade',require('jade').__express);
app.listen(8008);