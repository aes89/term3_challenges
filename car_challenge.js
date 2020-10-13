Core:
// Template Literals. Create carInfo() function that will return info about each car
// A car is considered cheap if it's price is <= 20,000
// A car is considered expensive if it's price is > 20,000


"use strict";


var cars = [
    { brand: "Honda", price: 13000 },
    { brand: "Rolls-Royce", price: 120000 },
    { brand: "Holden", price: 20000 }
];

function carInfo(car) {
    if (car.price <= 20000 ) {
        return `Price of my new ${car.brand} is $${car.price}, and it is a cheap car.`
    } else if (car.price > 20000 ) {
        return `Price of my new ${car.brand} is $${car.price}, and it is an expensive car.`
    } else {
        console.log("broken :( ")
    }
}

cars.forEach(car => console.log(carInfo(car)));
// Price of my new Honda is $13000, and it is a cheap car.
// Price of my new Rolls-Royce is $120000, and it is an expensive car.
// Price of my new Holden is $20000, and it is a cheap car.


