function findMatching(drivers, desired){
    return drivers.filter(mightMatch => mightMatch.toLowerCase() === desired.toLowerCase()) 
}
function fuzzyMatch(drivers, desired){
    return drivers.filter(mightMatch => mightMatch.toLowerCase().indexOf(desired.toLowerCase()) === 0)
}

function matchName (drivers, desired){
    return drivers.filter(mightMatch => mightMatch.name === desired)
}