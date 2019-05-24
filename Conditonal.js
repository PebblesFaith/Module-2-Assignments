var weatherName = window.prompt("Please enter weather condition in your location, such as sunny, cloudy, rainy, windy, or snowy (typed in all lowercase):");

var weatherid = document.getElementById("weather");
weatherid.innerHTML += " " + weatherName;

if (weatherName == "sunny") {
    document.write("You will have a great day!")
}

    if (weatherName == "cloudy") {
        document.write("This depends on the cloudy atmospheric height conditions, you might want to take your umbrella.")
    }

        if (weatherName == "rainy") {
            document.write("You will need to take your umbrella with you.")
        }

            if (weatherName == "windy") {
                document.write("Please do not take a hat with you outside, your hat will blow away from strong wind.")
            }

                if (weatherName == "snowy") {
                    document.write("Please wear your hat, gloves and boots.")
                }

    else {
        document.write("You have typed in an incorrect weather condition!")
    }
