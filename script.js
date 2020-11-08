//Ensures that jQUery loads first, place all code in here
$(document).ready(function () {
  //Load. If counter doesnt exist, intilize one
  var counter = 0;
  if(localStorage.getItem("counter") === null){
    counter = 0;
  }else{
    counter = localStorage.getItem("counter"); 
    counter = parseInt(counter);
    $("#counterText").html(counter);
  }

  $(".blueMas").on({'click':function(){
    counter += 1;
    //Prints the counter html
    $("#counterText").html(counter);

    //Save points to storage
    localStorage.setItem("counter", counter);
  }
  });

  $("#clearSave").on({'click':function(){
    counter = 0;
    localStorage.setItem("counter", counter);
    //Prints the counter html
    $("#counterText").html(counter);
  }
  });


});
