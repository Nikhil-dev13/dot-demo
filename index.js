$(".btm").click(function() {
    $('html, body').animate({
        scrollTop: $("#checkout").offset().top
    }, 50);
});
  $(document).ready(function(){
      console.log('hello');
      $('#myModal').modal('show')
  })

  $('.xyz').click(function(){
    console.log('hello');
    $('#myModal').modal('hide')
  })