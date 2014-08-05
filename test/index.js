describe('items', function(){

  it('GET / should list all items', function(done){
    chai.request(app).get('/').res(function(res){
      res.should.have.status(200);
      res.should.be.html;
      // you can use chai jquery to assert that the items
      // are present in the DOM here for further confidence
      done();
    });
  });

  it('POST / should create a new item');
  it('GET /:id should show an item');
  it('PUT /:id should update an item');
  it('DELETE /:id should remove an item');
});
