var id;

describe('items', function(){

  it('GET / should list all items', function(done){
    chai.request(app).get('/').res(function(res){
      res.should.have.status(200);
      res.should.be.html;
      render_dom(res.text, function(err, $){
        $('.info').length.should.be.gt(1)
        done();
      });
    });
  });

  it('POST / should create a new item', function(done){
    chai.request(app).post('/')
    .req(function(req){
      req.send("name=foobar&description=test%20description")
    }).res(function(res){
      res.should.have.status(200);
      res.should.be.html;
      render_dom(res.text, function(err, $){
        // save the item's id for the delete test later
        id = $('li .delete').last().data('id')
        info = $('li').last().find('.info')
        info.find('.name').text().should.equal('foobar');
        info.find('.description').text().should.equal('test description')
        done();
      });
    });
  });

  it('GET /:id should show an item', function(done){
    chai.request(app).get('/' + id).res(function(res){
      res.should.have.status(200);
      res.should.be.html;
      render_dom(res.text, function(err, $){
        $('h2').text().should.equal('foobar');
        $('p').text().should.equal('test description');
        done();
      });
    });
  });

  it('PUT /:id should update an item');

  it('DELETE /:id should remove an item', function(){
    chai.request(app).del('/'+id).res(function(res){
      res.should.have.status(200);
      res.should.be.json;
      render_dom(res.text, function(err, $){
        info = $('li').last().find('.info')
        info.find('.name').text().should.not.equal('foobar');
        info.find('.description').text().should.not.equal('test description')
        done();
      });
    });
  });

});

function render_dom(html, cb){
  jsdom.env(html, ["http://code.jquery.com/jquery.js"], function(err, window){
    cb(err, window.$);
  });
}
