let array = [14, 7, 3, 12, 9, 11, 6, 2];

console.log(array.length/2);

var firstHalf = array.slice(0, array.length/2);
var secondHalf = array.slice(array.length/2, array.length);

console.log(firstHalf, 'firstHalf');
console.log(secondHalf, 'secondHalf');

var one = firstHalf.slice(0, firstHalf.length/2);
console.log(one, 'one');

var two = firstHalf.slice(firstHalf.length/2, firstHalf.length);
console.log(two, 'two');

var three = secondHalf.slice(0, secondHalf.length/2);
console.log(three, 'three');

var four = secondHalf.slice(secondHalf.length/2, secondHalf.length);
console.log(four, 'four');

function swap(pair){

}

swap(one);
swap(two);

console.log(one);
console.log(two);