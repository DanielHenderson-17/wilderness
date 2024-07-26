// Function to calculate the total length of all rivers
const totalRiverMiles = (rivers) => {
    // Initialize a variable to hold the sum of river lengths
    let total = 0;
    // Iterate over each river object in the rivers array
    for (const river of rivers) {
        // Add the length of the current river to the total
        total += river.length;
    }
    // Return the total length of all rivers
    return total;
};

// Function to find the shortest river
const shortestRiver = (riverArray) => {
    // Initialize a variable to hold the shortest river length, starting with Infinity
    let shortest = Infinity;
    // Iterate over each river object in the riverArray
    for (const river of riverArray) {
        // Check if the current river's length is less than the current shortest length
        if(river.length < shortest) {
            // Update the shortest length to the current river's length
            shortest = river.length;
        }
    }
    // Return the shortest river length
    return shortest;
};

// Function to find the longest river
const longestRiver = (allRivers) => {
    // Initialize a variable to hold the longest river length, starting with 0
    let longest = 0;
    // Iterate over each river object in the allRivers array
    for (const river of allRivers) {
        // Check if the current river's length is greater than the current longest length
        if(river.length > longest) {
            // Update the longest length to the current river's length
            longest = river.length;
        }
    }
    // Return the longest river length
    return longest;
};

// Function to find the least expensive river tours
const leastExpensiveRiver = (rivers) => {
    const leastExpensive = rivers.filter(river => river.price === '$');
    let result = [];
    for (const river of leastExpensive) {
      result.push(river.river);
    }
    return result;
  };
  
  // Function to find the most expensive river tours
  const mostExpensiveRiver = (rivers) => {
    const mostExpensive = rivers.filter(river => river.price === '$$$$' || river.price === '$$$$$');
    let result = [];
    for (const river of mostExpensive) {
      result.push(river.river);
    }
    return result;
  };

// Export the functions to be used in other modules
module.exports = { totalRiverMiles, shortestRiver, longestRiver, leastExpensiveRiver, mostExpensiveRiver };

