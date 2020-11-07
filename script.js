$(document).ready(function () {
  var counter = 0;

  $(".blueMas").on({'click':function(){
   counter += 1;
    $("#counterText").html(counter);
  }
  });

});
