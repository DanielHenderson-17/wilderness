// Function to calculate the total length of all trails
const totalTrailMiles = (trails) => {
    // Initialize a variable to hold the sum of trail lengths
    let total = 0;
    // Iterate over each trail object in the trails array
    for (const trail of trails) {
        // Add the length of the current trail to the total
        total += trail.length;
    }
    // Return the total length of all trails
    return total;
};

// Function to find the shortest trail
const shortestTrail = (trailArray) => {
    // Initialize a variable to hold the shortest trail length, starting with Infinity
    let shortest = Infinity;
    // Iterate over each trail object in the trailArray
    for (const trail of trailArray) {
        // Check if the current trail's length is less than the current shortest length
        if(trail.length < shortest) {
            // Update the shortest length to the current trail's length
            shortest = trail.length;
        }
    }
    // Return the shortest trail length
    return shortest;
};

// Function to find the longest trail
const longestTrail = (allTrails) => {
    // Initialize a variable to hold the longest trail length, starting with 0
    let longest = 0;
    // Iterate over each trail object in the allTrails array
    for (const trail of allTrails) {
        // Check if the current trail's length is greater than the current longest length
        if(trail.length > longest) {
            // Update the longest length to the current trail's length
            longest = trail.length;
        }
    }
    // Return the longest trail length
    return longest;
};

// Function to find the least expensive trails
const leastExpensiveTrail = (trails) => {
    let leastExpensive = trails.filter(trail => trail.price === '$');
    let result = [];
    for (const trail of leastExpensive) {
        result.push(trail.trailName);
        }
    return result;
};

// Function to find the most expensive trails
const mostExpensiveTrail = (trails) => {
    const mostExpensive = trails.filter(trail => trail.price ==='$$$$' || trail.price === '$$$$$');
    let result = [];
    for (const trail of mostExpensive) {
            result.push(trail.trailName);
    }
    return result;
};

// Export the functions to be used in other modules
module.exports = { totalTrailMiles, shortestTrail, longestTrail, leastExpensiveTrail, mostExpensiveTrail };
