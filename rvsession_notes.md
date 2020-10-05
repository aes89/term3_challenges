Weekend Reading

    https://eloquentjavascript.net/11_async.html

    https://github.com/thejsway/thejsway/blob/master/manuscript/chapter10.md

    https://learn.saylor.org/pluginfile.php/236045/mod_resource/content/2/The%20New%20Software%20Engineering.pdf

    p. 292-293 tables 8.2 and 8.3

    Reading chapter 8 up until process design activities would be valuable also, but not necessary to be ready for the Monday session


Higher Order Funcs

    What's a higher order function?

    Any function that takes a function as an argument or returns a function

    in JS, we refer to the function(s) passed as arguments as 'callbacks'

    javascript

    let theDoubleHof = (x, func) => func(x * 2)

    let hassleTheDoubleHof = theDoubleHof(10, a => a + 1)

    Questions

    Which of the above two is a higher order function?

    Where's the callback?

    What value does the identifier hassleTheDoubleHof point to?

    What value does the identifier theDoubleHof point to?

    Why is a preposition a bad thing to end a sentence with?

    Examples of commonly used higher order functions on collections

    map

    for everything in the collection, I will apply a function and return a collection of the results

    javascript

    let catalogue = [

      {desc: "a very expenno banana", price: 50},

      {desc: "a very cheap car", price: 100},

      {desc: "a new gaming PC", price: 1337}

    ]

    let discountedPrices = catalogue.map(x => x.price * 0.9)

    Question

    If I call map on a collection with n elements, how many return elements will I get?

    filter

    for everything in the collection, I will apply a predicate, only those for which the predicate holds will be returned

    javascript

    let inputs = [1,2,3,4,5,6,7,8,9]

    let oddBois = inputs.filter(x => x % 2 == 1)

    Question

    If I call a filter on a collection with n elements, how many return elements will I get?

    reduce

    for everything in the collection, I will apply a function and record the result in an accumulator that will be available to the function I am applying. Once I have reduced all of the elements in the collection, I will return the final value

    I will apply func to The Current Element and then put the result in the accumulator, which The Next Element will have access to

    reduce is incredibly powerful as your use of it becomes more sophisticated, we will be focusing only on a simple use case

    javascript

    let inputs = [1,2,3,4,5,6,7,8,9]


    // pass it an anon func that has 2 param

    // one for the accumulated value so far

    // one for the current element

    let sumOfInputs = inputs.reduce((acc, cur) => {

      return acc + cur

    }, 0) // I am setting the starting value here to 0

    The starting acc value is 0, and the first cur is 1, 0+1 = 1

    Now the acc value is 1 and the cur is 2, 1 + 2 = 3

    Now the acc value is 3 and the cur is 3, 3 + 3 = 6

    javascript

    let students = [

      {name: "Einstein", grade: 99},

      {name: "Future Politician", grade: 17.5},

      {name: "Cigarless Cyril", grade: 79}, // He's close, but ...

      {name: "Sneaking in Cindy", grade: 80.5},

      {name: "RepsChamp", grade: 100}

    ]


    let groupStudents = students.reduce((acc, cur) => {

      cur.grade > 80 ? acc.relaxTime.push(cur) : acc.moreReps.push(cur)

      return acc

    }, {relaxTime: [], moreReps: []})

    The starting acc is an object with two empty arrays, and cur is einstein

    einstein gets pushed to the relaxTime array inside of the acc object

    we return the acc which is now {relaxTime: [einstein], moreReps: []}

    Next is a future politician, who has not done enough reps yet

    the future politician gets pushed to the moreReps array inside of the acc object

    we return the acc which is now {relaxTime: [einstein], moreReps: [futurePoli]}

    Question

    If I call reduce on a collection of x elements, how many elements will I get?

    find

    apply a predicate to each element of the collection, return the first element for which the predicate holds

    javascript

    let catalogue = [

      {desc: "a new gaming PC", price: 1337},

      {desc: "a very expenno banana", price: 50},

      {desc: "a less cheap car", price: 20000},

      {desc: "a very cheap car", price: 100},

      {desc: "a shack in Melbourne", price: 1000000}

    ]


    let thingIcanBuy = catalogue.find(x => x.price <= 100)

    Question

    if I call find on a collection with x elements, how many return elements will I get?

    some

    apply a predicate to each element of the collection, return if the predicate holds for one or more

    javascript

    let catalogue = [

      {desc: "a new gaming PC", price: 1337},

      {desc: "a very expenno banana", price: 50},

      {desc: "a less cheap car", price: 20000},

      {desc: "a very cheap car", price: 100},

      {desc: "a shack in Melbourne", price: 1000000}

    ]


    let canIBuyAnything = catalogue.some(x => x.price <= 100)

    question

    if I call some on a collection with x elements, how many return elements will I get?

    every

    apply a predicate to each element of the collection, return if the predicate holds for every element

    javascript

    let students = [

      {name: "Einstein", grade: 99},

      {name: "Future Politician", grade: 17.5},

      {name: "Cigarless Cyril", grade: 79}, // He's close, but ...

      {name: "Sneaking in Cindy", grade: 80.5},

      {name: "RepsChamp", grade: 100}

    ]


    let everyonePassed = students.every(x => x >= 50)

    question

    if I call every on a collection with x elements, how many return elements will I get?

    in the above example, who let the team down?

    More examples

    https://hexdocs.pm/elixir/master/Enum.html

    You may notice it bears some resemblance to Ruby, that's because it was written by a developer with significant Ruby experience

    Elixir is a functional programming language that has a ton of higher order functions for working on enumerables (anything that can be worked on one at a time)


Query, Command, State, and Side Effects

    Resources

    https://github.com/thejsway/thejsway/blob/master/manuscript/chapter10.md

    Queries are questions that your functions will answer

    Commands are instructions that your operations will follow

    Side effects such as writing files, sending a message over the network, or printing to the console are all commands

    Every useful program must have a side effect (otherwise the only purpose of it would be to evaluate functions without ever doing anything with the result of those functions)

    The exception here would be purposefully creating a large amount of computation to warm up your study by getting your CPU or GPU cooking

    State

    There is two categories of state, one that is mutable (able to be changed) and one that is immutable (unable to be changed)

    in JS, we have const and let; which stops us being able to reassign values to constants, but this does NOT mean they are immutable

    javascript

    let a = 5

    a = 6

    console.log(a) // Prints 6

    const b = 5

    b = 6 // Uh oh!

    console.log(b)

    Side Effects

    When an operation alters the state of the world outside of the operations scope, it is a side effect

    Printing to the screen

    Writing to a file

    Sending a message over the network

    Modifying global variables

    Modifying a mutable parameter

    Questions

    javascript

    let funcOne = (x) => {console.log(x * 2)}

    let funcTwo = (x) => {x * 2}

    let funcThree = (x) => {

      console.log(`Y'know what I love? ${x}`)

      return x + 1

    }

    Which of these are queries, and which are commands?

    javascript

    var resultVar = 5

    let myFunc = () => {

      resultVar = resultVar * 2

    }

    myFunc()

    console.log(resultVar == 10 ? "Cool" : "Uh Oh")

    Refactor this to remove side effects and global state

    javascript

    let myArr = [1,2,3,4,5,6]

    let resultArr = []

    myArr.forEach((x) => {

      if (x % 2 == 0) {

              resultArr.push(x * 2)    

      }

    })

    console.log(JSON.stringify(resultArr) === JSON.stringify([4,8,12]) ? 

                "Cool" : "Uh Oh")

    Refactor this to remove mutable state


Coupling and Cohesion

    Resources

    https://learn.saylor.org/pluginfile.php/236045/mod_resource/content/2/The%20New%20Software%20Engineering.pdf

    Chapter 8 with special attention paid to table 8.2 and 8.3

    p. 279-293 has the bulk of the important information

    Questions

    What is the level of cohesion of each function, how could we rewrite this?

    javascript

    let myObj = {}

    let myChain = {}


    let populateObjects = () => {

      myObj.field = "Initial field"

      myChain.field = "Chain field 0"

    }


    let addAnotherField = (obj) => {

      obj.anotherField = "some other value"

    }

    let addYetAnotherField = (obj) => {

      obj.yetAnotherField = "pls stop adding fields to me"

    }

    let addSomeFields = (obj) => {

      addAnotherField(obj)

      addYetAnotherField(obj)

    }


    let chainThree = (chain) => {

      chain.fieldThree = 3

    }

    let chainTwo = (chain) => {

      chain.fieldTwo = 2

      chainThree(chain)

    }

    let chainOne = (chain) => {

      chain.fieldOne = 1

      chainTwo(chain)

    }


    // Lets see how that works

    populateObjects()

    console.log({myObj})

    console.log("Calling add some fields")

    addSomeFields(myObj)

    console.log({myObj})

    console.log({myChain})

    console.log("Calling chain one")

    chainOne(myChain)

    console.log({myChain})