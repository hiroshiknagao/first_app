//let spaceship = {
//  homePlanet: 'Earth',
//  color: 'silver',
//  'Fuel Type': 'Turbo Fuel',
//  numCrew: 5,
//  flightPath: ['Venus', 'Mars', 'Saturn']
//};
//let crewCount = spaceship.numCrew;
//let planetArray = spaceship.flightPath
//console.log(crewCount);
//console.log(planetArray);

// bracket notation
//let spaceship = {
// 'Fuel Type': 'Turbo Fuel',
// 'Active Mission' : true,
//  homePlanet: 'Earth',
//  numCrew: 5,
//};
//
//let propName = 'Active Mission';
//let isActive = spaceship['Active Mission'];
//console.log(spaceship['Active Mission']);

// property assignment
let spaceship = {
  'fuel type' : 'Turbo Fuel',
  homePLanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
}

spaceship.color = 'Hotrod Red';
spaceship.numEngines = 7;
delete spaceship['Secret Mission'];

console.log(spaceship);
