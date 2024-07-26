const { trails } = require("./objects");
const { 
  totalTrailMiles, 
  shortestTrail, 
  longestTrail, 
  leastExpensiveTrail, 
  mostExpensiveTrail 
} = require("./trailFunctions");

// Print section headers for the Trails section
console.log("***************************************************");
console.log("*****              T R A I L S                *****");
console.log("***************************************************");

// Calculate the total miles of trails using totalTrailMiles function, passing in the trails array as an argument
const trailTotal = totalTrailMiles(trails);
console.log(`We service ${trailTotal} miles of wilderness trails across the US`);

// Determine the shortest trail using shortestTrail function, passing in the trails array as an argument
const shortTrail = shortestTrail(trails);
console.log(`The shortest trail is ${shortTrail} kilometers`);

// Determine the longest trail using longestTrail function, passing in the trails array as an argument
const longTrail = longestTrail(trails);
console.log(`The longest trail is ${longTrail} kilometers`);

// Find the least expensive trails using leastExpensiveTrail function, passing in the trails array as an argument
const leastExpensive = leastExpensiveTrail(trails);
console.log("The least expensive trails are");
// Iterate over the array of least expensive trails and print each trail name
for (const trail of leastExpensive) {
  console.log(`\t${trail}`);
}

// Find the most expensive trails using mostExpensiveTrail function, passing in the trails array as an argument
const mostExpensive = mostExpensiveTrail(trails);
console.log("The most expensive trails are");
// Iterate over the array of most expensive trails and print each trail name
for (const trail of mostExpensive) {
  console.log(`\t${trail}`);
}

// Print detailed information for each trail
console.log(`\n TRAIL DETAILS:`);
console.log("---------------------------------");
// Iterate over the trails array to access each trail object
for (const trail of trails) {
  // Print the trail's name, starting coordinates, and length
  console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length.toFixed(2)} kilometers long. \n`);
  // Print the highlighted plant for the trail
  console.log(`The highlighted plant for the trip is ${trail.plantHighlight}.`);
}

module.exports = {
  displayTrailInfo: () => {
    console.log("***************************************************");
    console.log("*****              T R A I L S                *****");
    console.log("***************************************************");

    const trailTotal = totalTrailMiles(trails);
    console.log(`We service ${trailTotal} miles of wilderness trails across the US`);

    const shortTrail = shortestTrail(trails);
    console.log(`The shortest trail is ${shortTrail} kilometers`);

    const longTrail = longestTrail(trails);
    console.log(`The longest trail is ${longTrail} kilometers`);

    const leastExpensive = leastExpensiveTrail(trails);
    console.log("The least expensive trails are");
    for (const trail of leastExpensive) {
      console.log(`\t${trail}`);
    }

    const mostExpensive = mostExpensiveTrail(trails);
    console.log("The most expensive trails are");
    for (const trail of mostExpensive) {
      console.log(`\t${trail}`);
    }

    console.log(`\n TRAIL DETAILS:`);
    console.log("---------------------------------");
    for (const trail of trails) {
      console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length.toFixed(2)} kilometers long. \n`);
      console.log(`The highlighted plant for the trip is ${trail.plantHighlight}.`);
    }
  }
};
