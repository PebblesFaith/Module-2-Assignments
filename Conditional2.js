/* Create variable bookName to store user window prompt entry. */
var bookName = window.prompt("Please enter book name:")

/* Create variable bookSentence to retrieve id element then add user entry to
   window prompt message. */
var bookSentence = document.getElementById("book-Cost");
bookSentence.innerHTML += " " + bookName;

/* Create variable operand1 to store user window prompt entry. */
var operand1 = parseInt(window.prompt("Enter the amount that you are willing to pay for the book:"));

/* Create variable operand1Sentence to retrieve id element then add user entry to
   window prompt message. */
var operand1Sentence = document.getElementById("price1");
operand1Sentence.innerHTML += " " + operand1;

/* Create variable operand2 to store user window prompt entry. */
var operand2 = parseInt(window.prompt("Enter the actual cost of the book:"));

/* Create variable operand2Sentence to retrieve id element then add user entry to
   window prompt message. */
var operand2Sentence = document.getElementById("price2");
operand2Sentence.innerHTML += " " + operand2;

/* Create if or else statements to perform a less than (<) or greater than (>) operation
   in order to analysis if an user can or cannot afford to buy the book. */

if (operand1 < operand2) {
    document.write("I cannot afford to buy the book.")
}

else {  
        document.write("I can afford to buy the book.")

}

