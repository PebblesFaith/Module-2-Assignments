/* Now, the question is, what happens to the DOM and CSSOM flows; once, the JavaScript (test1.js) file is introduce?

   Remember, one of the most important behavior in coding in JavaScript language is whenever, the browser encounters a ‘script’ tag, the DOM entire construction is paused temporarily.

   The DOM entire construction process comes to squeaking halted; until, the ‘script’ (test1.js) tag finishes executing.

   And, the location of the ‘script’ tags position matters into your test1.html file.

   In addition, remember, the ‘script’ (test1.js) tag file is halted; until, the CSSOM is processed.

3.	The ‘<script src = “test1.js”></script>’ element is fetched and executed; after, the entire DOM construction process is halted. Until, the script (test1.js) file finishes executing.

    •	This is because JavaScript language can alter both the DOM and CSSOM. Since, the browser is not sure, what this particular ‘script’ (test1.js) file will do, the browser takes precaution by halting the entire DOM construction all together. 
*/

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello World!";
  }

  myFunction();

  function myFunction1(a, b) {
    return a * b;
  }
  
  document.getElementById("demo1").innerHTML = myFunction1(4, 3);