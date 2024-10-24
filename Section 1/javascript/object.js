const user = {
    name: 'Raju',
    email: 'raju@mail.com',
    password: 'abc123'
};

console.log(user);

console.log(user.name);
console.log(user['email']);

user.address = 'Lucknow';
console.log(user);

user.password = 'xyz123';
console.log(user);

console.log(Object.keys(user));
console.log(Object.values(user));

const smartphone = {
    brand: 'Samsung',
    model: 'Galaxy s24 ultra',
    price: 120000,
    colors: ['graphite', 'mint', 'white']
}

console.log(smartphone);
// access price of the smartphone
console.log(smartphone.price);
// change price of the smartphone to 95000
smartphone.price = 95000;
console.log(smartphone);
// access 3rd color of the smartphone
console.log(smartphone.colors[2]);
// add a new color
smartphone.colors.push('black');
// replace the first color
smartphone.colors[0] = 'blue';

console.log(smartphone);

const smartphoneArray = [
    {
        brand: 'Samsung',
        model: 'Galaxy s24 ultra',
        price: 120000,
        colors: ['graphite', 'mint', 'white']
    },
    {
        brand: 'Oneplus',
        model: '10R',
        price: 55000,
        colors: ['blue', 'white']
    },
    {
        brand: 'Redmi',
        model: '11X',
        price: 27000,
        colors: ['grey', 'black', 'lightblue']
    },
    {
        brand: 'Oppo',
        model: 'F27',
        price: 35000,
        colors: ['blue', 'black', 'darkbrown']
    },
    {
        brand: 'Apple',
        model: 'Iphone 16 pro max',
        price: 170000,
        colors: ['black', 'blue', 'white']
    },
    {
        brand: 'Samsung',
        model: 'Galaxy s23',
        price: 89000,
        colors: ['gold', 'silver', 'white']
    },
];

console.log(smartphoneArray.length);

// filter all smartphones with price less than 50000

const budgetPhones = smartphoneArray.filter((phone) => {
    return phone.price < 50000;
});

console.log(budgetPhones);

// filter all phones with blue color
console.log(['a', 'b', 'c'].includes('d'));

const bluePhones = smartphoneArray.filter((phone) => {
    return phone.colors.includes('blue');
});
console.log(bluePhones);


const brands = smartphoneArray.map((phone) => {
    return phone.brand;
});

console.log(brands);

const keyword = 'sam';

// const results = smartphoneArray.filter((phone) => {
//     return phone.brand.toLowerCase() === keyword.toLowerCase();
// });

const results = smartphoneArray.filter((phone) => {
    return phone.brand.toLowerCase().includes(keyword.toLowerCase());
});

console.log(results);