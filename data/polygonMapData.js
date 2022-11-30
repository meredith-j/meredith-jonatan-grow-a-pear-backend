const classifyPoint = require("robust-point-in-polygon");

const zones = [
[[-104, 47], [-100, 47], [-100, 50], [-104, 45] ],
[[-64, 47], [-70, 47], [-80, 50], [-74, 45] ]
]

function pleaseWork(long, lat) {
    for (i = 0; i < zones.length; i++) {
    
    result = classifyPoint(zones, [long, lat])

        if (result = -1 && (i = 0)) {
            return "try again :("
        }
        if (result = -1 && (i = 1)) {
            return "YAHOO"
        }
    }
}

console.log(pleaseWork(-73.5698065, 45.5031824))