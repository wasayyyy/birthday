$('#turn_on').click(function(){
  $('body').addClass('water');
  $('#sand').fadeIn('slow').delay(1000).promise().done(function(){
    $('#bubbles').fadeIn('slow').delay(1000).promise().done(function(){
      var audio = $('.song')[0];
      audio.play();
      $('#content').fadeIn('slow');
    });
  });
  
  $(this).fadeOut('slow').delay(5000).promise().done(function(){
    $('#view_message').fadeIn('slow');
  });
});

$('#play_song').click(function(){
  $(this).fadeOut('slow').delay(5000).promise().done(function(){
    $('#view_message').fadeIn('slow');
  });
});

$('#view_message').click(function(){
  $('#messages').fadeIn('slow');
  $(this).fadeOut('slow');
  var i;

  function msgLoop (i) {
    $("p:nth-child("+i+")").fadeOut('slow').delay(1700).promise().done(function(){
      i=i+1;
      $("p:nth-child("+i+")").fadeIn('slow').delay(1700);
      if(i==50){
        $("p:nth-child(49)").fadeOut('slow').promise().done(function () {
          $('#view_gifts').fadeIn('slow');
        });
      }
      else{
        msgLoop(i);
      }			
    });
  }
  msgLoop(0);
});


$('#view_gifts').click(function() {
  $('#gift').addClass('bannar-come');
  $('#gift').fadeIn('slow');
  $(this).fadeOut('slow');
});