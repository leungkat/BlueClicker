//Item prices and whatnot
item_dict = {"bigger": 50, "dota": 100,  "jersey": 200, "lol": 100, "logo": 200}

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

  //things already purchased from shop
  let inventory = [0,0,0,0,0];
  
  $(".blueMas").on({'click':function(){
    counter += 1;
    //Prints the counter html
    $("#counterText").html(counter);

    //Save points to storage
    localStorage.setItem("counter", counter);
  }
  })

  $("#clearSave").on({'click':function(){
    counter = 0;
    localStorage.setItem("counter", counter);
    //Prints the counter html
    $("#counterText").html(counter);
  }
  })

  $("#buy1").on({'click': function() {
    if (counter - item_dict['bigger'] >= 0) {
      counter -= item_dict['bigger'];
      localStorage.setItem("counter", counter);
    }
    $("#counterText").html(counter);

    inventory[0] = 1;
  }
  })

   $("#buy2").on({'click': function() {
      if (counter - item_dict['dota'] >= 0) {
        counter -= item_dict['dota'];
        localStorage.setItem("counter", counter);
      }
      $("#counterText").html(counter);

      inventory[1] = 1;
      console.log(inventory);
    }
    })

  $("#buy3").on({'click': function() {
      if (counter - item_dict['lol'] >= 0) {
        counter -= item_dict['lol'];
        localStorage.setItem("counter", counter);
      }
      $("#counterText").html(counter);

      inventory[2] = 1;
    }
    })
  $("#buy4").on({'click': function() {
      if (counter - item_dict['jersey'] >= 0) {
        counter -= item_dict['jersey'];
        localStorage.setItem("counter", counter);
      }
      $("#counterText").html(counter);

      inventory[3] = 1;
    }
  })
$("#buy5").on({'click': function() {
      if (counter - item_dict['logo'] >= 0) {
        counter -= item_dict['logo'];
        localStorage.setItem("counter", counter);
      }
      $("#counterText").html(counter);

      inventory[4] = 1;
    }
    })
  console.log(inventory);
function loading(){

  if(inventory[1] == 1){
    var dotaelement = document.getElementById("dowota");
    dotaelement.classList.toggle("transparent");
  }
  if(inventory[2] == 1){
    var lolelement = document.getElementById("lol");
    lolelement.classList.toggle("transparent");
  }
  if(inventory[3] == 1){
    var jerseyelement = document.getElementById("jersey");
    jerseyelemetn.classList.toggle("transparent");
  }
  if(inventory[4] == 1){
    var logoelement = document.getElementById("logo");
    logoelement.classList.toggle("transparent");
  }
}
//NO CODE BEYOND THIS POINT >:) UNLESS???
});

 