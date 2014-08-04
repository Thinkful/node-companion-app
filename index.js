var express = require('express');
var path = require('path');
var mongoose = require('mongoose')
var port = 3000;
var app = express();

// models
var Item = require('./models/item');

// configuration
mongoose.connect('mongodb://localhost/inventory-dev');
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'assets')))

// routes
app.get('/', function(req, res){
  Item.find(function(err, items){
    if (err) return res.send(500, err);
    res.render('index', { items: items });
  });
});

// app.post('/', create)
// app.get('/:id', show)
// app.put('/:id', update)
// app.delete('/:id', remove)

app.listen(port, function(){
  console.log('listening on port ' + port);
});
