// Initialize Firebase
  var config = {
    apiKey: "AIzaSyDIzl1jzdcLMsZzCw6xcupVSDeh4KaK1C4",
    authDomain: "r-aider.firebaseapp.com",
    databaseURL: "https://r-aider.firebaseio.com",
    projectId: "r-aider",
    storageBucket: "r-aider.appspot.com",
    messagingSenderId: "97495354807"
  };

  firebase.initializeApp(config);

// Initialize variables
var database= firebase.database();
var total1a= 0;
var total2v= 0;
var total3s= 0;
var stopCount= 0;
// Created special folder to store player info
var playersRef = database.ref("/players");
var command1 = "";
var command2 = "";
var command3 = "";
var command4 = "";
var command5 = "";
var command6 = "";
var side = "";

$(document).on("click", "#arc", function() {
  event.preventDefault();
  if (stopCount < 3)
  {
    stopCount +=1;
    total1a += 1;
    total2v += 1;
    var assign1 = "arc";
    var assign2 = "void";
    document.getElementById("totalA").innerHTML = total1a; 
    document.getElementById("totalV").innerHTML = total2v; 
    assignPlayer(assign1, assign2);
  }
});

$(document).on("click", "#void", function() {
  event.preventDefault();
  if (stopCount < 3)
  {
    stopCount +=1
    total2v += 1;
    total3s += 1;
    var assign1 = "void";
    var assign2 = "solar";
    document.getElementById("totalV").innerHTML = total2v; 
    document.getElementById("totalS").innerHTML = total3s; 
    assignPlayer(assign1, assign2);
  }
});

$(document).on("click", "#solar", function() {
  event.preventDefault();
  if (stopCount < 3)
  {
    stopCount +=1
    total3s += 1;
    total1a += 1;
    var assign1 = "solar";
    var assign2 = "arc";
    document.getElementById("totalS").innerHTML = total3s; 
    document.getElementById("totalA").innerHTML = total1a; 
    assignPlayer(assign1, assign2);
  }
});

$(document).on("click", ".sideBtn", function() {
  var side = $(this).val();
  console.log(side);
  var sideArray = document.getElementsByClassName("side");
  for (var i = 0; i < sideArray.length; i++){
    sideArray[i].innerHTML = " / " + side;
  }
});

$(document).on("click", "#reset", function() {
  event.preventDefault();
  stopCount = 0;
  total1a = 0;
  total2v = 0;
  total3s = 0;
  document.getElementById("totalA").innerHTML = total1a; 
  document.getElementById("totalV").innerHTML = total2v; 
  document.getElementById("totalS").innerHTML = total3s; 
  document.getElementById("p1").innerHTML = "";
  document.getElementById("p2").innerHTML = "";
  document.getElementById("p3").innerHTML = "";
  document.getElementById("p4").innerHTML = "";
  document.getElementById("p5").innerHTML = "";
  document.getElementById("p6").innerHTML = "";
  var sideArray = document.getElementsByClassName("side");
  for (var i = 0; i < sideArray.length; i++){
    sideArray[i].innerHTML = "";
  }
});

function assignPlayer(a, b) {
  if (stopCount == 1) {
    document.getElementById("p1").innerHTML = a; 
    // document.getElementById("p1Command").innerHTML = a; 
    document.getElementById("p4").innerHTML = b; 
    var c1= "Cook " + a + " / Defend";
    var c4= "Cook " + b;

    playersRef.push(c1);
    playersRef.push(c4);
  }

  else if (stopCount ==2) {
    document.getElementById("p2").innerHTML = a; 
    document.getElementById("p5").innerHTML = b; 

    var c2= "Cook " + a + " / Defend";
    var c5= "Cook " + b;

    playersRef.push(c2);
    playersRef.push(c5);
  }
  else if (stopCount ==3) {
    document.getElementById("p3").innerHTML = a; 
    document.getElementById("p6").innerHTML = b; 

    var c3= "Cook " + a + " / Defend";
    var c6= "Cook " + b;

    playersRef.push(c3);
    playersRef.push(c6);
  }
}

// Detecting Presence
// Created folder to store connections
var connectionsRef = database.ref("/connections");
// '.info/connected' is a special location provided by Firebase that is updated every time
// the client's connection state changes.
// '.info/connected' is a boolean value, true if the client is connected and false if they are not.
var connectedRef = database.ref(".info/connected");

// When the client's connection state changes...
connectedRef.on("value", function(snap) {
  // If they are connected..
  if (snap.val()) {
    // Add user to the connections list.
    var con = connectionsRef.push(true);
    // Remove user from the connection list when they disconnect.
    con.onDisconnect().remove();
  }
});

// When first loaded or when the connections list changes...
connectionsRef.on("value", function(snap) {
  // Display the viewer count in the html.
  // The number of online users is the number of children in the connections list.
  $("#watchers").html(snap.numChildren());
});
