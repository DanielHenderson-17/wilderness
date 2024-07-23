const { trails, rivers, wildlife } = require("./objects")

const { totalTrailMiles, shortestTrail, longestTrail } = require("./trailFunctions")

const { totalRiverMiles, shortestRiver, longestRiver } = require("./riverFunctions")


console.log(`
    B J Ö R N ' S   W I L D N E R N E S S   A D V E N T U R E S
    ***********************************************************

                                                        ###
        ______                                         #o###
       /     /\     (              ______            #####o###
      /     /  \     )            /     /\          #o#\#|#/###
     /_____/----\_    (          /     /  \          ###\|/#o#
    '     '          ).         /_____/----\_         # }|{  #
   _ ___          O (:') o      '  '     '   '          }|{
  (@))_))        O ~/~~\~ o                             }|{
                  o     O                          ____/   \____
                     O
`)


console.log('***************************************************')
console.log('*****              T R A I L S                *****')
console.log('***************************************************')
const trailTotal = totalTrailMiles(trails)
console.log(`We service ${trailTotal} miles of wilderness trails across the US`)

const shortTrail = shortestTrail(trails)
console.log(`The shortest trail is ${shortTrail} kilometers`)

const longTrail = longestTrail(trails)
console.log(`The longest trail is ${longTrail} kilometers`)

console.log('***************************************************')
console.log('*****              RIVERS                     *****')
console.log('***************************************************')

const riverTotal = totalTrailMiles(rivers)
console.log(`We offer expert guidance on ${riverTotal} kilometers of scenic rivers across the US`)

const shortRiver = shortestRiver(rivers)
console.log(`The shortest river is ${shortRiver} kilometers`)

const longRiver = longestRiver(rivers)
console.log(`The longest river is ${longRiver} kilometers`)
