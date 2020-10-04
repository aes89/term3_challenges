let string1 = "aAbBcC"
let string2 = "cCdDeEaA"
let string3 = ""
let string4 = "it's got balls"

const commonCharacters = (string1, string2) => {
    var unique1 = string1.toLowerCase().replace(/\s+/g, '').split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
    var unique2 = string2.toLowerCase().replace(/\s+/g, '').split('').filter(function(item, i, ar){ return ar.indexOf(item) === i; }).join('');
    let matching = []
    for (let c of unique1) {
        let match = unique2.includes(c);
        // console.log("match?", match)
        if (match == true) {
            matching.push(c)
            // console.log("15 matching?", matching)
        }
    }
    // console.log("Common characters", matching)
    let sharedCharacters = matching.join("");
    return sharedCharacters

}

console.log("1/2:", commonCharacters(string1, string2))
console.log("3/4:", commonCharacters(string3, string4))

module.exports = {commonCharacters}