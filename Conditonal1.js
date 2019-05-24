/* Create variable WeatherName to store user window prompt entry. */
var weatherName = window.prompt("Please enter weather condition in your location, such as sunny, cloudy, rainy, windy, or snowy (typed in all lowercase):");

/* Create variable weatherIdSentence to retrieve id element then add user entry to
    the end of H3 sentence heading.*/
var weatherIdSentence = document.getElementById("weather");
weatherIdSentence.innerHTML += " " + weatherName;

/* Create if and else statements to perform weather conditions and evaluations analytics
   on the basis of user entry on today's weather. */
  
if (weatherName == "sunny") {
    document.write("You will have a great day!")
}

    else if (weatherName == "cloudy") {
        document.write("This depends on the clouds atmospheric height conditions, you might want to take your umbrella.")
    }

        else if (weatherName == "rainy") {
            document.write("You will need to take your umbrella with you.")
        }

            else if (weatherName == "windy") {
                document.write("Please do not take a hat with you outside, your hat will blow away from strong winds.")
            }

                else if (weatherName == "snowy") {
                    document.write("Please wear your hat, gloves and boots.")
                    document.write("<br>")
                }

    else {
        document.write("<br>");
        document.write("You have typed in an incorrect weather condition!");
    }
