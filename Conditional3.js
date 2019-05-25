/* Create variable testPoint to store user window prompt entry. */
var testPoint = parseInt(window.prompt("Enter your test grade:"));

/* Create variable testSentence to retrieve user id element then add user entry at the
   end of H2 sentence heading.*/
var testSentence = document.getElementById("score");
testSentence.innerHTML += " " + testPoint;

/* Create if and else statements to perform ranges on analytics operation
   from user entry test score results; in order for the user to retrieve their
   course final test score. */

var a = 90;
var b = 80;
var c = 70;
var d = 60;

if (testPoint >= a) {
    document.write("You have receive an A from the course.");
}
    else if (testPoint >= b) {
        document.write("You have receive a B from the course.");
    }

        else if (testPoint >= c) {
            document.write("You have receive a C from the course.");
        }

            else if (testPoint >= d) {
                document.write("You have receive a D from the course.");
            }
else {
   document.write("You have failed this course.");
}

