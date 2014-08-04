$(function(){

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
