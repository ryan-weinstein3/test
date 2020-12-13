var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', (req, res)=>{ 
 
var data = {name:'Akashdeep', 
    hobbies:['playing football', 'playing chess', 'cycling']} 
  
res.render('home', {data:data}); 
}); 
  
var server = app.listen(4000, function() { 
    console.log('listining to port 4000') 
}); 
