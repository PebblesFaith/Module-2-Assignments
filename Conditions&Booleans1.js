/* Create variable userName to store user window prompt entry. */
var userName = window.prompt("Enter your first (1st) name:");

/* Create variable userQuestion to retrieve user id element then add user entry at the
   end of H3 sentence heading.*/
var userQuestion = document.getElementById("continents");
userQuestion.innerHTML += " " + userName;

/* Create variable firstNameContinent to store user window prompt entry. */
var firstNameContinent = window.prompt("Enter the first (1st) continent name. And, please type in all uppercase letters for the continent name.");

/* Create variable firstQuestionContinent to retrieve user id element then add user entry at the
   end of H5 sentence header.*/
var firstQuestionContinent = document.getElementById("firstContinent");
firstQuestionContinent.innerHTML += " " + firstNameContinent;

/* Create variable secondNameContinent to store user window prompt entry. */
var secondNameContinent = window.prompt("Enter the second (2nd) continent name. And, please type in all uppercase letters for the continent name.");

/* Create variable secondQuestionContinent to retrieve user id element then add user entry at the
   end of H5 sentence header.*/
var secondQuestionContinent = document.getElementById("secondContinent");
secondQuestionContinent.innerHTML += " " + secondNameContinent;

/* Create variable thirdNameContinent to store user window prompt entry. */
var thirdNameContinent = window.prompt("Enter the third (3rd) continent name. And, please type in all uppercase letters for the continent name.");

/* Create variable thirdQuestionContinent to retrieve user id element then add user entry at the
   end of H5 sentence header.*/
var thirdQuestionContinent = document.getElementById("thirdContinent");
thirdQuestionContinent.innerHTML += " " + thirdNameContinent;

/* Create variable fourthNameContinent to store user window prompt entry. */
var fourthNameContinent = window.prompt("Enter the fourth (4th) continent name. And, please type in all uppercase letters for the continent name.");

/* Create variable fourthQuestionContinent to retrieve user id element then add user entry at the
   end of H5 sentence header.*/
var fourthQuestionContinent = document.getElementById("fourthContinent");
fourthQuestionContinent.innerHTML += " " + fourthNameContinent;

/* Create variable fifthNameContinent to store user window prompt entry. */
var fifthNameContinent = window.prompt("Enter the fifth (5th) continent name. And, please type in all uppercase letters for the continent name.");

/* Create variable fifthQuestionContinent to retrieve user id element then add user entry at the
   end of H5 sentence header.*/
var fifthQuestionContinent = document.getElementById("fifthContinent");
fifthQuestionContinent.innerHTML += " " + fifthNameContinent;

/* Create variable sixthNameContinent to store user window prompt entry. */
var sixthNameContinent = window.prompt("Enter the sixth (6th) continent name. And, please type in all uppercase letters for the continent name.");

/* Create variable sixthQuestionContinent to retrieve user id element then add user entry at the
   end of H5 sentence header.*/
var sixthQuestionContinent = document.getElementById("sixthContinent");
sixthQuestionContinent.innerHTML += " " + sixthNameContinent;

/* Create variable seventhtNameContinent to store user window prompt entry. */
var seventhNameContinent = window.prompt("Enter the seventh (7th) continent name. And, please type in all uppercase letters for the continent name.");

/* Create variable seventhQuestionContinent to retrieve user id element then add user entry at the
   end of H5 sentence header.*/
var seventhQuestionContinent = document.getElementById("seventhContinent");
seventhQuestionContinent.innerHTML += " " + seventhNameContinent;

/* Create local function for user to refresh page.*/ 
document.write("<br>");
function refreshPage(){
    window.location.reload();
    document.write("<br>");
    document.write("<br>");
} 


/* Create variables and assign them to the seven (7) continent names. */
var a = "AFRICA";
var b = "ANTARCTICA";
var c = "ASIA";
var d = "AUSTRALIA";
var e = "EUROPE";
var f = "NORTH AMERICA";
var g = "SOUTH AMERICA";

/* Create if and else statements to perform variables analytic operations
   from user seven (7) continent entries results; in order for the user to retrieve their
   correct answers from their entries data. */


if (firstNameContinent === a) { 
    document.write("You have named the 1st " + firstNameContinent + " continents correctly.");
    document.write("<br>");


if (secondNameContinent === b) { 
    document.write("You have named the 2nd " + secondNameContinent + " continent correctly.");
    document.write("<br>");
}

if (thirdNameContinent === c) { 
    document.write("You have named the 3rd " + thirdNameContinent + " continent correctly.");
    document.write("<br>");
}

if (fourthNameContinent === d) { 
    document.write("You have named the 4th " + fourthNameContinent + " continent correctly.");
    document.write("<br>");
}

if (fifthNameContinent === e) { 
    document.write("You have named the 5th " + fifthNameContinent + " continent correctly.");
    document.write("<br>");
}

if (sixthNameContinent === f) { 
    document.write("You have named the 6th " + sixthNameContinent + " continent correctly.");
    document.write("<br>");
}

if (seventhNameContinent === g) { 
    document.write("You have named the 7th " + sixthNameContinent + " continent correctly.");
    document.write("<br>");
}


if (firstNameContinent !== a) { 
    document.write("<br>");
    document.write("You have entered either the name or misspell the 1st continents correctly.");
    document.write("<br>");
}

if (secondNameContinent !== b) {
    document.write("<br>"); 
    document.write("You have entered either the name, misspell or chronlogical order the 2nd continents correctly.");
    document.write("<br>");
}

if (thirdNameContinent !== c) { 
    document.write("<br>");
    document.write("You have entered either the name, misspell or chronological order the 3rd continents correctly.");
    document.write("<br>");
}

if (fourthNameContinent !== d) { 
    document.write("<br>");
    document.write("You have entered either the name, misspell or chronological order the 4th continents correctly.");
    document.write("<br>");
}

if (fifthNameContinent !== e) { 
    document.write("<br>");
    document.write("You have entered either the name, misspell or chronlogical order the 5th continents correctly.");
    document.write("<br>");
}

if (sixthNameContinent !== f) { 
    document.write("<br>");
    document.write("You have entered either the name, misspell or chronlogical order the 6th continents correctly.");
    document.write("<br>");
}

if (seventhNameContinent !== g) { 
    document.write("<br>");
    document.write("You have entered either the name, misspell or chronlogical order the 7th continents correctly.");
    document.write("<br>");
}

}

else {
    document.write("<br>");
    document.write("You will need to start over!")
    document.write("<br>");
    document.write("<br>");
}



