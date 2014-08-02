var express = require('express');
var path = require('path');
var port = 3000;
var app = express();

app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'assets')))

app.get('/', function(req, res){
  res.render('index');
});

// app.post('/', create)
// app.get('/:id', show)
// app.put('/:id', update)
// app.delete('/:id', remove)

app.listen(port, function(){
  console.log('listening on port ' + port);
});
