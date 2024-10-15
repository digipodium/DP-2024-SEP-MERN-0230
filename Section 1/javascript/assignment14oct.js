// WAP to print grade on the basis of marks

const marks = -60;

if (marks >= 90 && marks <= 100) {
    console.log('Grade A');
} else if (marks >= 70 && marks < 90) {
    console.log('Grade B');
} else if (marks >= 50 && marks < 70) {
    console.log('Grade C');
} else if (marks >= 0 && marks < 50) {
    console.log('Fail');
} else {
    console.log('Invalid marks');
}

// WAP to check if number is a perfect square.

const num = 25;
const root = num ** 0.5;
console.log(root);
console.log(15 ** 2);


if (Number.isInteger(root)) {
    console.log('Perfect square');
} else {
    console.log('Not a perfect square');
}

// WAP to check if a number is divisible by both 7 and 11
const num1 = 77;