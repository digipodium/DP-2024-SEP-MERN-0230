const arr = [344, 'hello', true, 345.23, undefined];

console.log(typeof arr);
console.log(Array.isArray(arr));

console.log(arr.length);

const movies = ['Avengers', 'Animal', 'Deadpool', '1920', 'Batman'];

// indexing
console.log( movies[2] );
console.log( movies.indexOf('Batman') );
console.log( movies.indexOf('Superman') );
console.log( movies[100] );
console.log( movies.at(-3) );

// slicing
console.log(movies.slice(1, 4));
console.log(movies.slice(1, 5));
console.log(movies.slice(1, 50));

// adding and removing elements
movies.push('Superman'); // adds at the end
movies.unshift('Flash'); // adds at the end
console.log(movies);

movies.pop(); // removes from the end
movies.shift(); // removes from the start
console.log(movies);

// movies.splice(2, 2); // removes 2 elements from index 2
// movies.splice(2, 2, 'Deadpool 2', '1920 evil returns') // replaces 2 elements from index 2
movies.splice(2, 0, 'Deadpool 2', '1920 evil returns') // insert 2 elements from index 2
console.log(movies);