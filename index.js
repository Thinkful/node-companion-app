var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var path = require('path');
var mongoose = require('mongoose');
var port = process.env.PORT || 3000;
var app = express();

//
// models
//

var Item = require('./models/item');

//
// configuration
//

var databaseUrl = 'mongodb://localhost/inventory-dev';
if (process.env.NODE_ENV === 'production') {
  databaseUrl = 'external db address here!';
}

mongoose.connect(databaseUrl);
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));
if (process.env.NODE_ENV != 'test') app.use(morgan('dev'));

//
// routes
//

app.get('/', function(req, res){
  Item.find(function(err, items){
    if (err) return error(res, err);
    res.render('index', { items: items });
  });
});

app.get('/new', function(req, res){
  res.render('new');
});

app.post('/', function(req, res){
  var item = new Item({
    name: req.body.name,
    description: req.body.description
  });

  item.save(function(err, item){
    if (err) return error(res, err);
    res.redirect('/');
  });

});

app.delete('/:id', function(req, res){
  Item.findById(req.params.id, function(err, item){
    if (err) return error(res, err);

    item.remove(function(err){
      if (err) return error(res, err);
      res.json({ success: 'true' });
    });
  });
});

app.get('/:id', function(req, res){
  Item.findById(req.params.id, function(err, item){
    if (err) return error(res, err);

    res.render('show', item);
  });
});

app.get('/:id/edit', function(req, res){
  Item.findById(req.params.id, function(err, item){
    if (err) return error(res, err);
    res.render('edit', item);
  });
});

// technically, this should be a PUT, but html forms can't send a PUT request
app.post('/:id', function(req, res){
  Item.findByIdAndUpdate(req.params.id,
  { name: req.body.name, description: req.body.description },
  function(err, item){
    if (err) return error(res, err);
    res.render('show', item);
  });
});

// utility functions

function error(res, err){
  res.status(500).send(err);
}

app.listen(port, function(){
  console.log('listening on port ' + port);
});

module.exports = app;
