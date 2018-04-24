let fs = require("fs")
let moment = require("moment")
let UserSearch = require("./userSearch.js")

function WeatherAdmin() {

    this.newUserSearch = function(userName, userLoc) {
        let newUser = new UserSearch(userName, userLoc)

        let date = moment().format('MMMM Do YYYY, hh:mm:ss a');;  

        fs.appendFile("log.txt", `\nUsername: ${userName} - Location: ${userLoc} - Date and Time: ${date}`, function(err) {
            if (err) console.log(err)
        })

        newUser.getWeather()
    }
    
    this.getData = function() {
        fs.readFile("log.txt", "utf8", function (err, res) {
            if (err) console.log(err)
        
            console.log(res)
        })
    }
}

admin = new WeatherAdmin()

module.exports = WeatherAdmin
