// Initialize variables
var total1a= 0;
var total2v= 0;
var total3s= 0;

$(document).on("click", "#arc", function() {
  event.preventDefault();
  total1a += 1;
  total2v += 1;
  document.getElementById("totalA").innerHTML = total1a; 
  document.getElementById("totalV").innerHTML = total2v; 
});

$(document).on("click", "#void", function() {
  event.preventDefault();
  total2v += 1;
  total3s += 1;
  document.getElementById("totalV").innerHTML = total2v; 
  document.getElementById("totalS").innerHTML = total3s; 
});

$(document).on("click", "#solar", function() {
  event.preventDefault();
  total3s += 1;
  total1a += 1;
  document.getElementById("totalS").innerHTML = total3s; 
  document.getElementById("totalA").innerHTML = total1a; 
});

$(document).on("click", "#reset", function() {
  event.preventDefault();
  total1a = 0;
  total2v = 0;
  total3s = 0;
  document.getElementById("totalA").innerHTML = total1a; 
  document.getElementById("totalV").innerHTML = total2v; 
  document.getElementById("totalS").innerHTML = total3s; 
});