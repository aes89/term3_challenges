const myChain = {}

// Why did I volunteer again?

let populateObjects = (o) => {
  let cloooonez = {...o}
  cloooonez.field = "Chain field 0"
  return cloooonez
}

let chainOne = (chain) => {
  let clone = {...chain}
  clone.fieldOne = 1
  return clone
}

let chainTwo = (chain) => {
  let clone = {...chain}
  clone.fieldTwo = 2
  return clone
}

let chainThree = (chain) => {
  let clone = {...chain}  
  clone.fieldThree = 3
  return clone
}

let tiesThatBind = (chain) => {
  chainThree(chainTwo(chainOne(populateObjects(chain)))) // LISP
  chain
  |> populateObjects
  |> chainOne
  |> chainTwo
  |> chainThree // PIPES

  chain
    .populateObjects
    .chainOne
    .chainTwo
    .chainThree // Instance methods, in JS that's a prototype function

  let step1 = populateObjects(chain)
  let step2 = chainOne(step1)
  let step3 = chainTwo(step2)
  let step4 = chainThree(step3) // Identifier city
}

// Lets see how that works
console.log({myChain})
console.log("Calling tiesthatbind")
let newChain = tiesThatBind(myChain)
console.log({myChain})
console.log({newChain})


// something about API calls, and it's bad?? works by coincidence in timing if lucky
// let tiesThatBind = (chainURL) => {
// let tiesThatBind = (chainURL) => {
//     let returnDataObj = {}
//     API.get(chainURL)
//     .then(populateObjects)
//     .then((x) => chainOne(x, returnDataObj))
//     .then(chainTwo)
//     .then(chainThree)
// return returnDataObj
// }
