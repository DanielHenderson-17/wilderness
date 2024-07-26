const { database } = require("./objects");
const { 
  totalTrailMiles, 
  shortestTrail, 
  longestTrail, 
  leastExpensiveTrail, 
  mostExpensiveTrail 
} = require("./trailFunctions");

const displayTrailInfo = () => {
  console.log("***************************************************");
  console.log("*****              T R A I L S                *****");
  console.log("***************************************************");

  const trailTotal = totalTrailMiles(database.trails);
  console.log(`We service ${trailTotal} miles of wilderness trails across the US`);

  const shortTrail = shortestTrail(database.trails);
  console.log(`The shortest trail is ${shortTrail} kilometers`);

  const longTrail = longestTrail(database.trails);
  console.log(`The longest trail is ${longTrail} kilometers`);

  const leastExpensive = leastExpensiveTrail(database.trails);
  console.log("The least expensive trails are");
  for (const trail of leastExpensive) {
    console.log(`\t${trail}`);
  }

  const mostExpensive = mostExpensiveTrail(database.trails);
  console.log("The most expensive trails are");
  for (const trail of mostExpensive) {
    console.log(`\t${trail}`);
  }

  console.log(`\n TRAIL DETAILS:`);
  console.log("---------------------------------");
  for (const trail of database.trails) {
    console.log(`${trail.trailName} starts at [${trail.latitude}, ${trail.longitude}] and is ${trail.length.toFixed(2)} kilometers long. \n`);
    console.log(`The highlighted plant for the trip is ${trail.plantHighlight}.`);
  }
};

module.exports = { displayTrailInfo };
