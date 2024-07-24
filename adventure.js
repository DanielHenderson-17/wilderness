// Destructuring assignment to import specific objects and arrays from the "objects" module
const { trails, rivers, wildlife } = require("./objects");

// Destructuring assignment to import specific functions from the "trailFunctions" module
const { totalTrailMiles, shortestTrail, longestTrail, leastExpensiveTrail, mostExpensiveTrail } = require("./trailFunctions");

// Destructuring assignment to import specific functions from the "riverFunctions" module
const { totalRiverMiles, shortestRiver, longestRiver, leastExpensiveRiver, mostExpensiveRiver } = require("./riverFunctions");

// Print a multi-line string to display a banner for Bjorn's Wilderness Adventures
console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /  \          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`);

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
