const classifyPoint = require("robust-point-in-polygon");
const zones = require("./zoneData")

// THIS FUNCTION LOOPS THROUGH ALL OF THE POLYGONS ON MY MAP AND USES THE CLASSIFYPOINT FUNCTION TO DETERMINE WHETHER EACH ZONE SURROUNDS THE COORDINATES (LONG/LAT)
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
            return "montreal goes here"
        }
    }
}

// TESTING PURPOSES
// console.log(findZone(-73.5698065, 45.5031824))

module.exports = { zoneFunction };