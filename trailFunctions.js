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
    // Initialize an array to hold the names of the least expensive trails
    let leastExpensive = [];
    // Iterate over each trail object in the trails array
    for (const trail of trails) {
        // Check if the current trail's price is represented by a single dollar sign
        if (trail.price === '$') {
            // Add the current trail's name to the leastExpensive array
            leastExpensive.push(trail.trailName);
        }
    }
    // Return the array of least expensive trail names
    return leastExpensive;
};

// Function to find the most expensive trails
const mostExpensiveTrail = (trails) => {
    // Initialize an array to hold the names of the most expensive trails
    let mostExpensive = [];
    // Iterate over each trail object in the trails array
    for (const trail of trails) {
        // Check if the current trail's price is represented by four or five dollar signs
        if (trail.price === '$$$$' || trail.price === '$$$$$') {
            // Add the current trail's name to the mostExpensive array
            mostExpensive.push(trail.trailName);
        }
    }
    // Return the array of most expensive trail names
    return mostExpensive;
};

// Export the functions to be used in other modules
module.exports = { totalTrailMiles, shortestTrail, longestTrail, leastExpensiveTrail, mostExpensiveTrail };
