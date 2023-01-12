// const zoneFunction = require("../data/zoneFunction");
const axios = require('axios')
const zones = require("../data/zoneData")
const classifyPoint = require("robust-point-in-polygon");
const API_KEY = process.env.API_KEY;

function zoneFunction(lng, lat) {
    for (let i = 0; i < zones.length; i++) {

    let result = classifyPoint(zones[i], [lng, lat])

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

        if (result === -1 && (i < 13)) {
            return "zone_3A"
        }
        if (result === -1 && (i < 14)) {
            return "zone_4A"
        }
        if (result === -1 && (i < 15)) {
            return "zone_5A"
        }
        if (result === -1 && (i < 16)) {
            return "zone_5B"
        }
        if (result === -1 && (i < 17)) {
            return "zone_6A"
        }
    }
};


const getZone = (req, res, next) => {

    const city = req.body.city
    const province = req.body.province

    let zone;

    axios.get(`https://maps.googleapis.com/maps/api/geocode/json?key=${API_KEY}&address=${city}&${province}&canada&sensor=false`)
         .then((response) => {

            const lat = response.data.results[0].geometry.location.lat
            const lng = response.data.results[0].geometry.location.lng

            zone = zoneFunction(lng, lat)

            req.zone = zone
            next()

         })
         .catch((err) =>{
            console.log(err)
         })
};

module.exports = getZone;