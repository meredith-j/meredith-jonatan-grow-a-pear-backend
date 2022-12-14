// const zoneFunction = require("../data/zoneFunction");
const axios = require('axios')
const zones = require("../data/zoneData")
const classifyPoint = require("robust-point-in-polygon");

function zoneFunction(long, lat) {
    for (let i = 0; i < zones.length; i++) {
    
    // in case i need to test again:
    // console.log('zone', zones[i])
    
    let result = classifyPoint(zones[i], [long, lat])

    // in case i need to test again
    // console.log(result)

        if (result === -1 && (i < 1)) {
            return "try again :("
        }
        if (result === -1 && (i < 2)) {
            return "nope"
        }
        if (result === -1 && (i < 3)) {
            return "close"
        }
        if (result === -1 && (i < 4)) {
            return "montreal"
        }
    }
};


const getZone = (req, res, next) => {

    const city = req.body.city
    const province = req.body.province

    let zone;

    axios.get(`https://api.geoapify.com/v1/geocode/search?city=${city}&state=${province}&filter=countrycode:ca&apiKey=5d0ba47bf54543a3827bc40b2277159c`)
         .then((response) => {

            console.log("lon:", response.data.features[0].properties.lon)
            console.log("lat:", response.data.features[0].properties.lat)

            const lon = response.data.features[0].properties.lon
            const lat = response.data.features[0].properties.lat

            zone = zoneFunction(lon, lat)

            console.log("function result:", zoneFunction(lon, lat))

            req.zone = zone

            console.log("zone:", zone)

            next()

         })
         .catch((err) =>{
            console.log("oh no")

            console.log(err)
         })
};

module.exports = getZone;