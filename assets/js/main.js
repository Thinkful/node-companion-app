$(function(){

  // This is one of those times that you start to see that using a front end MV*
  // system like backbone, angular, etc might help things. If you had a larger
  // and more complex app, this type of code can get very messy, very fast.

  $('#index .delete').on('click', function(){
    console.log($(this).data('id'));

    $.ajax({
      url: $(this).data('id'),
      method: 'DELETE'
    }).fail(function(err){
      console.error(err);
    }).done(function(){
      location.reload();
    });

  });


});
