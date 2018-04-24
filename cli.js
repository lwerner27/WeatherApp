let WeatherAdmin = require("./weather.js")

let args = process.argv

let arg1 = process.argv[2]

let username = process.argv[3]

let location = process.argv[4]

function checkArgs (arg1) {

    if (arg1 === "user") {

        admin.newUserSearch(username, location)

    } else if (arg1 === "admin") {

        admin.getData()

    }
}

checkArgs(arg1)