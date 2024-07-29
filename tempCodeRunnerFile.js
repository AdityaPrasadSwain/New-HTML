let r = 16
let R
let pi = 22/7
let smallcircle = Math.ceil(pi * r * r)
// console.log(smallcircle)

let bigcircle = Math.ceil(352 + smallcircle)

// console.log(bigcircle)
 R_power2 = bigcircle * 7/22
//  console.log(R)
R = Math.ceil(Math.sqrt(R_power2));
//  console.log(rootOfR);
let leanth_of_road = Math.ceil(R - r)
console.log(leanth_of_road)
console.table([
  { variable: 'r', value: r },
  { variable: 'R', value: R },
  { variable: 'pi', value: pi },
  { variable: 'smallcircle', value: smallcircle },
  { variable: 'bigcircle', value: bigcircle },
  { variable: 'R', value: R },
  { variable: 'leanth_of_road', value: leanth_of_road }
]);