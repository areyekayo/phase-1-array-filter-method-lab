const driversList = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']

function findMatching(driversArray, driverName){
    return driversArray.filter(function (driver){
        let driverCase = driver.toLowerCase();
        let driverNameCase = driverName.toLowerCase();
        return driverCase == driverNameCase
        });
    };

//const findBobby = findMatching(driversList, "bobby")

function fuzzyMatch(driversArray, driverStr){
    return driversArray.filter(function (driver){
        let driverLetters = driver.slice(0,2);
        debugger
        return driverLetters === driverStr
    });
}

//const findDrivers = fuzzyMatch(driversList, "Sa");
const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];


function matchName(drivers, driverName){
    return drivers.filter(function (driver){
        return driver.name === driverName
    });
}

const driverObjectMatch = matchName(drivers, "Bobby");