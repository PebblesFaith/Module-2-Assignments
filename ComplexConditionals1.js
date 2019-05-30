
/* Add an else statement to the if statement above that will output the text "Both
   numbers are not even". Verify that this text is displayed in the document when
   x and y are not even.*/
var x = 45;
var y = 24;

if(x % 2 == 0 && y % 2 == 0){
    document.getElementById("statements1").innerHTML = "The " + x + " % 2 == 0 and " + y + " % 2 == 0 is both true.";
}
else {
    document.getElementById("statements1").innerHTML = "The " + x + " % 2 == 0 and " + y + " % 2 == 0 is not both true.";
}                 
/*Add another if/else statement that uses the OR (||) operator to determine if at least
  1 number is odd. "At least 1 number is odd" if true otherwise print "neither number
  is odd."*/
if(x % 2 == 0 || y % 2 == 0){
    document.getElementById("statements2").innerHTML = "The " + x + " % 2 == 0 or " + y + " % 2 == 0 at least one (1) number is true.";
}
else {
    document.getElementById("statements2").innerHTML = "The " + x + " % 2 == 0 or " + y + " % 2 == 0 neither number is odd.";
}      