
/* Create a 'for' loop to ensure the loop will run specific number of times between 0
   to 100 because each loop iteration contains three (3) javascript statements:
   1) initialization,
   2) condition(s), and
   3) change, modification or steps.  */
   
   for (count = 0; count < 100; count++) { 

       if (count % 2 == 0) {
            document.write("<font color = 'white'>" + count + ' ' +  "<font>");
       }

       else {
           /* Do Nothing */
       }
}
