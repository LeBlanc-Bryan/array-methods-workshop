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

return nums.filter((x) => x>0).forEach((x) => console.log(x));