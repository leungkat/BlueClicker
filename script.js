//Item prices and whatnot
item_dict = {"friend": 50, "dota": 100,  "jersey": 200, "lol": 100, "logo": 200}
//Keep track if item has already been bought. 
//Ex: if player bought 'friend' then item_owned['friend'] is true
item_owned = [false, false, false, false, false, false]

//Ensures that jQUery loads first, place all code in here
$(document).ready(function () {
  //Load. If counter doesnt exist, intilize one
  var counter = 0;
  if(localStorage.getItem("counter") === null){
    counter = 0;
  } else{
    counter = localStorage.getItem("counter"); 
    counter = parseInt(counter);
    $("#counterText").html("Points: " + counter);
  }
  
  //On first load, hide all images. Ideally, if purchase goes through call show() on img
  $(".pet").hide(); 
  $(".lol").hide();
  $(".jersey").hide();
  $(".dota").hide();
  $(".logo").hide();
  if (item_owned[0] == true) {
    $(".pet").show(); 
  } 
  
  

  $(".blueMas").on({'click':function(){
    counter += 1;
    //Prints the counter html
    $("#counterText").html("Points: " + counter);

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
    if (counter - item_dict['friend'] >= 0) {
      counter -= item_dict['friend'];
      localStorage.setItem("counter", counter);
    }
    $("#counterText").html(counter);
    $(".pet").show(); 
  }
  })

  $("#buy2").on({'click': function() {
    if (counter - item_dict['dota'] >= 0) {
      counter -= item_dict['dota'];
      localStorage.setItem("counter", counter);
    }
    $("#counterText").html(counter);
  }
  })

  $("#buy3").on({'click': function() {
      if (counter - item_dict['lol'] >= 0) {
        counter -= item_dict['lol'];
        localStorage.setItem("counter", counter);
      }
      $("#counterText").html(counter);
    }
    })
  $("#buy4").on({'click': function() {
      if (counter - item_dict['jersey'] >= 0) {
        counter -= item_dict['jersey'];
        localStorage.setItem("counter", counter);
      }
      $("#counterText").html(counter);
    }
  })
$("#buy5").on({'click': function() {
      if (counter - item_dict['logo'] >= 0) {
        counter -= item_dict['logo'];
        localStorage.setItem("counter", counter);
      }
      $("#counterText").html(counter);
    }
    })
//NO CODE BEYOND THIS POINT >:) UNLESS???
});

 