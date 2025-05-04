// 1 rectangle area

let width = 10,
  height = 15;
console.log(`The area of the rectangle is: ${width * height}`);

// 2 convert temp

let c_temp = 40;
console.log(`${c_temp}°C is ${c_temp * 1.8 + 32}°F`);
let f_temp = c_temp * 1.8 + 32;
console.log(`${f_temp}°F is ${(f_temp - 32) / 1.8}°C`);

// 3 convert time form hour to second

let hour = 2,
  sec = hour * 60 * 60;
console.log(`${hour} hours = ${sec} Seconds`);

// 4 Concatenation

let str1 = "thingOne",
  str2 = "thingTwo";
console.log(`${str1} ${str2}`);

// 5 Total bill

var bill = 10.25 + 3.99 + 7.15,
  tip = 0.15,
  total = bill * tip;

console.log(total);
