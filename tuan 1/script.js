'use strict';
const restaurants = {
    name: 'boombar ',
    location: 'hanoi ,vietnam ',
    categories: ['italian', 'pizeerria', 'vegetarian', 'organic'],
    startermenu: ['banh mi', 'pho', 'bun', 'chao', 'mien'],
    mainmenu: ['rau', 'khoai', 'my'],
    order: function(starterIndex, mainIndex) {
        return [this.startermenu[starterIndex], this.mainmenu[mainIndex]];
    }


};
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];
const [x, y, z] = arr;
console.log = (x, y, z);
console.log(arr);
let [main, secondary] = retaurants.categories;
console.log(main, secondary);
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
const [starter, mainCourse] = restaurants.order(2, 0);
console.log(starter, mainCourse);
const nested = [2, 4, [5, 6]];
// const [i, j] = nested;
console.log(i, j);
const [i, , [j, k]] = nested;
console.log(i, j, k);
//defautl value
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);