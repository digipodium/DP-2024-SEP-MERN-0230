for (let i = 0; i < 10; i++) {
    console.log(i);
}

// WAP to print all even numbers between 50 to 100

for (let i = 50; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// WAP to print all numbers divisible by 7 between 30 to 99
for (let i = 30; i < 100; i++) {
    if (i % 7 === 0) {
        console.log(i);
    }
}

console.log('while loop');

let b = 10;

while (b < 20) {
    console.log(b);
    b++;
}

console.log('do-while loop');

let c = 10;

do {
    console.log(c);
    c++;
} while (c < 20)

// WAP to check if a number is prime

const num1 = 5;
let prime = true;

for (let i = 2; i < num1 / 2; i++) {
    if (num1 % i === 0) {
        console.log('not prime');
        prime = false;
        break;
    }
}

if (prime) console.log('prime');

console.log('-------------------');

for (let j = 1; j <= 30; j++) {
    let prime = true;

    for (let i = 2; i <= j / 2; i++) {
        
        if (j % i === 0) {
            prime = false;
            break;
        }
    }

    if (prime) console.log(j);
}