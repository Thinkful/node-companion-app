var W = require('when');
var node = require('when/node');
var mongoose = require('mongoose');
var Item = require('./models/item');

mongoose.connect('mongodb://localhost/inventory-dev');

var items = []

items.push(new Item({ name: 'Couch', description: 'Wow such comfort' }));
items.push(new Item({ name: 'Chair', description: 'You can sit on this' }));
items.push(new Item({ name: 'Laptop', description: 'Beep boop' }));

items = items.map(function(i){ return node.call(i.save.bind(i)) });

W.all(items)
  .then(function(){ console.log('database seeded, whoo!') })
  .catch(console.error)
  .done(node.lift(mongoose.disconnect.bind(mongoose)));
