// Get the sum of all river miles
const totalRiverMiles = (river) => {
    let total = 0
    for (const river of river) {
        total = river.length
    }

    return total
}

// Get the shortest of all rivers
const shortestRiver = (riverArray) => {
    let shortest = Infinity;
    for (const river of riverArray) {
        if(river.length < shortest) {
            shortest = river.length
        }
    }

    return shortest
}

// Get the longest of all rivers
const longestRiver = (allRivers) => {
    let longest = 0
    for (const river of allRivers) {
        if(river.length > longest) {
            longest = river.length
        }
    }

    return longest
}

module.exports = { totalRiverMiles, shortestRiver, longestRiver }