let weather = require("weather-js")

function UserSearch(userName, userLoc) {
    this.userName = userName
    this.userLoc = userLoc
}

UserSearch.prototype.getWeather = function() {

    weather.find({search: this.userLoc, degreeType: 'F'}, 
    function(err, result) {

        if(err) console.log(err);
       
        let currentLoc = result[0];

        console.log("")
        console.log(`Today's Weather for: ${currentLoc.location.name}`)
        console.log(`Today's current temp is: ${currentLoc.current.temperature} `)
        console.log(`Today's Low is: ${currentLoc.forecast[1].low}`)
        console.log(`Today's high is: ${currentLoc.forecast[1].high}`)

    });

}

module.exports = UserSearch