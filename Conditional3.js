/* Create variable bookName to store user window prompt entry. */
var testPoint = parseInt(window.prompt("What is your total test point?"));

/* Create variable testSentence to retrieve id element then add user entry to
   window prompt message. */
var testSentence = document.getElementById("score");
testSentence.innerHTML += " " + testPoint;

/* Create if and else statements to perform ranges of user test results operation; in 
   order for user to retrieve test score final results. */

var a = 20;
var b = 18;
var c = 16;
var d = 14;

if (testPoint >= a) {
    document.write("You will receive an A from the course.");
}
    else if (testPoint >= b) {
        document.write("You will receive an B from the course.");
    }

        else if (testPoint >= c) {
            document.write("You will receive an C from the course.");
        }

            else if (testPoint >= d) {
                document.write("You will receive an D from the course.");
            }
else {
   document.write("You have failed this course.");
}

