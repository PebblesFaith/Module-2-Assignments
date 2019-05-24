var weatherName = window.prompt("Please enter weather condition in your location, such as sunny, cloudy, rainy, windy, or snowy (typed in all lowercase):");

var weatherid = document.getElementById("weather");
weatherid.innerHTML += " " + weatherName;

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
                document.write("Please do not take a hat with you outside, your hat will blow away from strong wind.")
            }

                else if (weatherName == "snowy") {
                    document.write("Please wear your hat, gloves and boots.")
                    document.write("<br>")
                }

    else {

        document.write("<br>")
        document.write("You have typed in an incorrect weather condition!")
    }
