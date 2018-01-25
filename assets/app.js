// Initialize variables
var total1a= 0;
var total2v= 0;
var total3s= 0;
var stopCount= 0;

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
});

function assignPlayer(a, b) {
  if (stopCount == 1) {
    document.getElementById("p1").innerHTML = a; 
    document.getElementById("p4").innerHTML = b; 
  }
  else if (stopCount ==2) {
    document.getElementById("p2").innerHTML = a; 
    document.getElementById("p5").innerHTML = b; 
  }
  else if (stopCount ==3) {
    document.getElementById("p3").innerHTML = a; 
    document.getElementById("p6").innerHTML = b; 
  }
}