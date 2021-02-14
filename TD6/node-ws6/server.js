const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const fetch = require('node-fetch');



app.use(express.static('public'));

app.get('/',function(req,res){
  res.send('Hello World');
});

app.post('/info', jsonParser, function(req,res){
  const body = req.body;
  const form = body.form;
  const bg_color = body.bg_color;
  const borderColor = body.borderColor;
  const thickness = body.thickness;
  const size = body.size;
  res.send('INFO: Form :' + form + ' / bg_color :'  + bg_color + ' / borderColor :' + borderColor + ' / thickness :' + thickness + ' / Size :' + size )
});

app.listen(3000, function(){
  console.log('Server Running!');
});
