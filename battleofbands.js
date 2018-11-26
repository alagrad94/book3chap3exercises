var bandNumber = 0;
const takeNumber = function (bandName) {
    bandNumber = bandNumber + 1;
    console.log(`${bandNumber}. ${bandName}`)
}
const scum = takeNumber("Galactic Scum")
const under = takeNumber("Underdogs")
const boo = takeNumber("BooHoo")