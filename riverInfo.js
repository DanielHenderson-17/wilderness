const { database } = require("./objects");
const { 
  totalRiverMiles, 
  shortestRiver, 
  longestRiver, 
  leastExpensiveRiver, 
  mostExpensiveRiver 
} = require("./riverFunctions");

const displayRiverInfo = () => {
  console.log("***************************************************");
  console.log("*****              RIVERS                     *****");
  console.log("***************************************************");

  const riverTotal = totalRiverMiles(database.rivers);
  console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`);

  const shortRiver = shortestRiver(database.rivers);
  console.log(`The shortest river is ${shortRiver} kilometers`);

  const longRiver = longestRiver(database.rivers);
  console.log(`The longest river is ${longRiver} kilometers`);

  const leastRiver = leastExpensiveRiver(database.rivers);
  console.log("The least expensive river tours are");
  for (const river of leastRiver) {
    console.log(`\t${river}`);
  }

  const mostRiver = mostExpensiveRiver(database.rivers);
  console.log("The most expensive river tours are");
  for (const river of mostRiver) {
    console.log(`\t${river}`);
  }

  console.log(`\n River DETAILS:`);
  console.log("---------------------------------");
  for (const river of database.rivers) {
    console.log(`${river.river} starts at [${river.latitude}, ${river.longitude}] and is ${river.length.toFixed(2)} kilometers long.`);
    console.log(`The unique fish for the trip is ${river.uniqueFish}. \n`);
  }
};

module.exports = { displayRiverInfo };
