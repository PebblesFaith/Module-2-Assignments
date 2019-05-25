/* Create variable bookName to store user window prompt entry. */
var bookName = window.prompt("Please enter any book title name:")

/* Create variable bookSentence to retrieve user id element then add user entry to
   the end of H2 question heading.*/
   
var bookSentence = document.getElementById("book-Cost");
bookSentence.innerHTML += " " + bookName;

/* Create variable operand1 to store user window prompt entry. */
var operand1 = parseInt(window.prompt("Enter the amount you are willing to pay for this book:"));

/* Create variable operand1 to retrieve user id element then add user entry within
   the H3 sentence heading.*/

document.getElementById("price1").innerHTML = "I am willing to pay $" + operand1 +
    " for the " + bookName + " book.";

/* Create variable operand2 to store user window prompt entry. */
var operand2 = parseInt(window.prompt("Enter the actual cost of this book:"));

/* Create variable operand2 to retrieve user id element then add user entry within
   the H3 sentence heading.*/

document.getElementById("price2").innerHTML = "The actual cost for the " + bookName + " book is $" + operand2 +
     ".";

/* Create if or else statements to perform a less than (<) or greater than (>) operation
   in order to analyzed if an user can or cannot afford to buy the title name book. */

if (operand1 < operand2) {
    document.write("You cannot afford to buy the " + bookName + " book.")
}

else {  
        document.write("You can afford to buy the " + bookName + " book.")

}

