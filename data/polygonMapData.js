const classifyPoint = require("robust-point-in-polygon");

// NEXT TWO LINES ARE THE EXAMPLE THE CLASSIFY POINT NPM LIBRARY PROVIDED
// const test = [[-74, 50], [-80, 47], [-74, 45], [-70, 47]]
// console.log(classifyPoint(test, [-73.5698065, 45.5031824]));

// HERE IS THE ARRAY OF EVERY POLYGON I HAVE PLACED ON MY MAP
const zones = [
// zone 1
[[-104, 47], [-120, 47], [-100, 50], [-144, 45]],
// zone 2
[[-114, 20], [-100, 47], [-100, 50], [-104, 45]],
[[-104, 47], [-100, 47], [-100, 50], [-104, 45]],
[[-74, 50], [-80, 47], [-74, 45], [-70, 47]]
];

// THIS FUNCTION LOOPS THROUGH ALL OF THE POLYGONS ON MY MAP AND USES THE CLASSIFYPOINT FUNCTION TO DETERMINE WHETHER EACH ZONE SURROUNDS THE COORDINATES (LONG/LAT)
function findZone(long, lat) {
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
            return "YAHOO"
        }
    }
}

// TESTING PURPOSES
console.log(findZone(-73.5698065, 45.5031824))