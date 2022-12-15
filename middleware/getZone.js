// const zoneFunction = require("../data/zoneFunction");
const axios = require('axios')
const zones = require("../data/zoneData")
const classifyPoint = require("robust-point-in-polygon");
const API_KEY = process.env.API_KEY;

function zoneFunction(lng, lat) {
    for (let i = 0; i < zones.length; i++) {
    
    // in case i need to test again:
    // console.log('zone', zones[i])
    
    let result = classifyPoint(zones[i], [lng, lat])

    // in case i need to test again
    // console.log(result)

        if (result === -1 && (i < 3)) {
            return "zone_0A"
        }
        if (result === -1 && (i < 7)) {
            return "zone_0B"
        }
        if (result === -1 && (i < 9)) {
            return "zone_1A"
        }
        if (result === -1 && (i < 10)) {
            return "zone_1B"
        }
        if (result === -1 && (i < 12)) {
            return "zone_2A"
        }
    }
};


const getZone = (req, res, next) => {

    const city = req.body.city
    const province = req.body.province

    let zone;

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&address=${city}&${province}&canada&sensor=false`)
         .then((response) => {

            console.log("lat:", response.data.results[0].geometry.location.lat)
            console.log("lon:", response.data.results[0].geometry.location.lng)

            const lat = response.data.results[0].geometry.location.lat
            const lng = response.data.results[0].geometry.location.lng

            zone = zoneFunction(lng, lat)

            req.zone = zone
            next()

         })
         .catch((err) =>{
            console.log("oh no")

            console.log(err)
         })
};

module.exports = getZone;

// GEOAPIFY API
    // axios.get(`https://api.geoapify.com/v1/geocode/search?city=${city}&state=${province}&filter=countrycode:ca&apiKey=5d0ba47bf54543a3827bc40b2277159c`)

    // console.log("lon:", response.data.features[0].properties.lon)
    // console.log("lat:", response.data.features[0].properties.lat)

    // const lon = response.data.features[0].properties.lon
    // const lat = response.data.features[0].properties.lat