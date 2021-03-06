let tasks = ["Take a walk", "Stretch for 5 minutes", "Stand up and walk around", "No screen time for 10 minutes", "Drink some water", "Have a healthy snack", "Posture check", "Check in with someone you care about", "Carpal Tunnel stretches", "Meditate for 10 minutes"
]

let finished = [0,0,0]

var counter = 0;

function setTasks(){
  var first = -1, second = -1, third = -1;

  first = Math.floor(Math.random() * 10);
  second = Math.floor(Math.random() * 10);
  third = Math.floor(Math.random() * 10);

  //this is redundant, but I don't want to write another boolean
  if(first == second || first == third){
    first = Math.floor(Math.random() * 10);
  }
  if(second == first || second == third){
    second = Math.floor(Math.random() * 10);
  }
  if(third == second || third == first){
    third = Math.floor(Math.random() * 10);
  }

  document.getElementById("t1").innerHTML = tasks[first];
  document.getElementById("t2").innerHTML = tasks[second];
  document.getElementById("t3").innerHTML = tasks[third];
}

function completeTask(tasknum){
var color = -1;
var add = true;
  switch(tasknum){
    case 1:
      if(finished[0] == 0){
        finished[0] = 1;
      }
      else{
        finished[0] = 0;
        add = false;
      }
      color = document.getElementById("t1");
      break;
    case 2:
      if(finished[1] == 0){
        finished[1] = 1;
      }
      else{
        finished[1] = 0;
        add = false;
      }
      color = document.getElementById("t2");
      break;
    case 3:
      if(finished[2] == 0){
        finished[2] = 1;
      }
      else{
        finished[2] = 0;
        add = false;
      }
      color = document.getElementById("t3");
  }

  color.classList.toggle("clickbutton");

  var alldone = true;
  counter = localStorage.getItem("counter"); 
  counter = parseInt(counter);
  

  for(var i = 0; i < 3; i++){
    if(finished[i] == 0){
      alldone = false;
    }
  }

  if (alldone){
    console.log("done");
    finished = [0,0,0];
    setTasks();

    document.getElementById("t1").classList.toggle("clickbutton");
    document.getElementById("t2").classList.toggle("clickbutton");
    document.getElementById("t3").classList.toggle("clickbutton");
    //add 50 points here
    counter += 50;
    localStorage.setItem("counter", counter); 
  }

  if(add){
    //add 20 points here
    counter += 20;
    localStorage.setItem("counter", counter); 
  }
  else{
    //subtract 20 points here
    counter -= 20;
    localStorage.setItem("counter", counter); 
  }

}

setTasks();