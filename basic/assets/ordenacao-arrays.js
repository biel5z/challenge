// let frutas = ['Maça','Uva','laranja','Banana']

// // sort() pega por ordem alfabetica 
// frutas.sort();

// // reverse pega do ultimo pro primeiro
// frutas.reverse();
// console.log(frutas)

let cars = [
    { brand: 'fiat', year: 2022 },
    { brand: 'Bmw', year: 2018 },
    { brand: 'Ferrari ', year: 2020 }
]

cars.sort((a, b) => a.year - b.year);

console.log(cars)