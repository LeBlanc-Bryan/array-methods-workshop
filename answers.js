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
    
    
// I'd like to buy a vowel - Write a function called countVowels that takes a string and returns 
// the number of vowels in the string. You should use Array.prototype.reduce to do your work.
// For the string "The quick brown fox", the output should be 5 because there is one e, one u, one i and two os.
// Hint: You can use String.prototype.split again. There is a way to use it to split a string by character.
// Try to Google it :)
// Hint 2: You can create an array of vowels and use Array.prototype.indexOf to check if the current letter is a vowel.
var vowels = ["a","e","i","o","u"];
var bigolString = "This is a string that I wrote to get an A";
var countVowels = function(str) {
    var tempo = str.toLowerCase().split("")
    return tempo.reduce(function(vowelCount,isVowel) {
        if((vowels.indexOf(isVowel)) >= 0) {
            vowelCount = vowelCount + 1;
        }
        return vowelCount;
    },0) 
}
console.log(countVowels(bigolString));

// High? Low?
// Write a function called highLow that takes an array of numbers, and returns an object with a property 
// highest containing the highest number, and a property lowest containing the lowest number, 
// using Array.prototype.reduce.
// For example, starting with [1, -10, 20, 40, 5], your function should return {highest: 40, lowest: -10}.
// Hint: Javascript has a special value called Infinity, which is higher than any other number. 
// See if you can initialize your reduce accumulator with Infinity and -Infinity :)
var testArray = [1, -10, 20, 40, 5];
function highLow(numArray) {
    var highGuy = numArray.reduce(function(high, isHigher){
            if(high < isHigher) {
                high = isHigher;
            }
            return high;
        },0)
    
    var lowBlow = numArray.reduce(function(low, isLower){
            if(low > isLower) {
                low = isLower;
            }
            return low;
        },0);

return {highest: highGuy, lowest: lowBlow}
}
console.log(highLow(testArray));
    










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