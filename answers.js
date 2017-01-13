// Only the pos - Write a function called printPositives that takes an array 
// and uses the forEach method to print only the positive numbers.
var nums = [3,-9,10,-15,4,-78,3,-90];

var printPositives = nums.forEach(function(x) {
    if (x>=0) {
        console.log(x);
    }
})
// Get positive - Similar to the previous exercise, write a function called getPositives that
// takes an array and uses the filter method to return a new array with only the positive numbers.
  
  
var getPositives = nums.filter((x) => x>0 );
console.log(getPositives);

// Filter it out - Re-do exercise 1 by first filtering the input array, 
// and then printing the numbers from the filtered array.
// Your code will look something like: return arr.filter(...).forEach(...)

//return nums.filter((x) => x>=0).forEach((x) => console.log(x));

// Filter Array - Write a function called filterArray that takes a callback function and an array as arguments. 
// Your filterArray function should return a new array that contains only the elements where the callback function
// returns true. NOTE: This is a trick question. The answer is a one-liner and you are allowed to use array.filter
var myArr = ["fourteen", 7, 55, -89, "Chicken"];
var filterArray = Array.prototype.filter;


// The Longest Word - Write a function called longestWord that takes a string as argument, 
// and returns the longest word in the string. You should use Array.prototype.reduce to do your work.
// Hint: You can use String.prototype.split to split the string into an array of words.
var myString = "This is a bunch of words for this exercise!"
var longestWord = function(str) {
    return str.split(" ").reduce(function(longest, word) {
        if (longest.length < word.length) {
            longest = word;
        }
        return longest;
    },"")
    }
    console.log(longestWord(myString));

























// numArray2 = [5,4,9,33];
// console.log(numArray2.reduce(function(a,b) {
//     return a+b;
// },0))






































// var theString = "We are trying to learn how 2 code ";
// var theFunction = function(str) {
//   return str.split(" ").filter(function(word) {
//         if (word.match(/[a-z]/i)) {
//             return true;
//         }
//         return false;
//     })
//     .reduce(function(shortest,word){
//         if(shortest.length > word.length) {
//             shortest = word;
//         }
//         return shortest;
//     },"")
// }
// console.log(theFunction(theString));