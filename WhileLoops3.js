 /* Create initialize variable to check condition and if the condition is true
    then execute code in between the curly brace and when the executed code between the 
    curly braces is finishes go to the next variable condition. If there no more condition
    to check the loop will stop the code execution. */
   
    var count = 0;

    while (count < 101) {
        count++;
      if (count % 2 == 0) {
        
        document.write(count + " ");
      }    
      else {
          /* Do Nothing */
      }     
      
    }
   
  

    

  

    