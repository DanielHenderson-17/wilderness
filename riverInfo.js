const { rivers } = require("./objects");
const { totalRiverMiles, shortestRiver, longestRiver, leastExpensiveRiver, mostExpensiveRiver } = require("./riverFunctions");

// Print section headers for the Rivers section
console.log("***************************************************");
console.log("*****              RIVERS                     *****");
console.log("***************************************************");

// Calculate the total miles of rivers using totalRiverMiles function, passing in the rivers array as an argument
const riverTotal = totalRiverMiles(rivers);
console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`);

// Determine the shortest river using shortestRiver function, passing in the rivers array as an argument
const shortRiver = shortestRiver(rivers);
console.log(`The shortest river is ${shortRiver} kilometers`);

// Determine the longest river using longestRiver function, passing in the rivers array as an argument
const longRiver = longestRiver(rivers);
console.log(`The longest river is ${longRiver} kilometers`);

// Find the least expensive river tours using leastExpensiveRiver function, passing in the rivers array as an argument
const leastRiver = leastExpensiveRiver(rivers);
console.log("The least expensive river tours are");
// Iterate over the array of least expensive rivers and print each river name
for (const river of leastRiver) {
  console.log(`\t${river}`);
}

// Find the most expensive river tours using mostExpensiveRiver function, passing in the rivers array as an argument
const mostRiver = mostExpensiveRiver(rivers);
console.log("The most expensive river tours are");
// Iterate over the array of most expensive rivers and print each river name
for (const river of mostRiver) {
  console.log(`\t${river}`);
}

// Print detailed information for each river
console.log(`\n River DETAILS:`);
console.log("---------------------------------");
// Iterate over the rivers array to access each river object
for (const river of rivers) {
  // Print the river's name, starting coordinates, and length
  console.log(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length.toFixed(2)} kilometers long.`);
  // Print the unique fish for the river
  console.log(`The unique fish for the trip is ${river.uniqueFish}. \n`);
}

module.exports = {
  displayRiverInfo: () => {
    console.log("***************************************************");
    console.log("*****              RIVERS                     *****");
    console.log("***************************************************");
    const riverTotal = totalRiverMiles(rivers);
    console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`);
    const shortRiver = shortestRiver(rivers);
    console.log(`The shortest river is ${shortRiver} kilometers`);
    const longRiver = longestRiver(rivers);
    console.log(`The longest river is ${longRiver} kilometers`);
    const leastRiver = leastExpensiveRiver(rivers);
    console.log("The least expensive river tours are");
    for (const river of leastRiver) {
      console.log(`\t${river}`);
    }
    const mostRiver = mostExpensiveRiver(rivers);
    console.log("The most expensive river tours are");
    for (const river of mostRiver) {
      console.log(`\t${river}`);
    }
    console.log(`\n River DETAILS:`);
    console.log("---------------------------------");
    for (const river of rivers) {
      console.log(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length.toFixed(2)} kilometers long.`);
      console.log(`The unique fish for the trip is ${river.uniqueFish}. \n`);
    }
  },
};
