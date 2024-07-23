// Get the sum of all trail miles
const totalTrailMiles = (trails) => {
    let total = 0
    for (const trail of trails) {
        total = trail.length
    }

    return total
}

// Get the shortest of all trails
const shortestTrail = (trailArray) => {
    let shortest = Infinity;
    for (const trail of trailArray) {
        if(trail.length < shortest) {
            shortest = trail.length
        }
    }

    return shortest
}

// Get the longest of all trails
const longestTrail = (allTrails) => {
    let longest = 0
    for (const trail of allTrails) {
        if(trail.length > longest) {
            longest = trail.length
        }
    }

    return longest
}

module.exports = { totalTrailMiles, shortestTrail, longestTrail }