console.log('Hello from the arrayMethods!');

/*
    Array Methods
*/

// Create an array with which we will work
let names = ['Jane', 'Mike', 'Anthony', 'Bruce', 'Katie', 'Matt'];

// Basic Looping
for (let i=0; i < names.length; i++){
    console.log(names[i]);
};

console.log('=====================')

// for...of loop
for (let name of names){
    console.log(name);
};
console.log('=====================')

// Array.prototype.forEach()
names.forEach(element => console.log(element));

console.log('=====================')
// Callback Function
function logInfo(element, idx, arr){
    console.log(element, idx, arr)
};

names.forEach(logInfo);

names.forEach(name => console.log(name.toUpperCase()))

// Array.prototype.map()
function mapCallBack(element, index){
    if (index % 2 === 0){
        return element.toUpperCase();
    } else {
        return element.toLowerCase();
    };
};

let newNames = names.map(mapCallBack);
console.log(newNames);
console.log(names);

// As Arrow Function
let newerNames = names.map((e, i) => i%2 === 0 ? e.toUpperCase() : e.toLowerCase() );
console.log(newerNames);
