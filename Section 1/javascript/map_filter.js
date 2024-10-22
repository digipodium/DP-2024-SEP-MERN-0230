const nums = [3, 7, 9, 4, 1, 8];

const newNums = nums.map((n) => { return n * 10 });
console.log(newNums);

const prices = [33, 45.99, 270, 2300, 120];
// add 18% GST to all prices

console.log(50 * 1.18);
console.log(50 * 0.18 + 50);
const newPrices = prices.map((p) => { return p * 1.18 });
console.log(newPrices);

const evenNums = nums.filter((n) => { return n % 2 === 0 });
console.log(evenNums);