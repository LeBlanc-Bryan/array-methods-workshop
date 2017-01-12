//Only the pos - Write a function called printPositives that takes an array 
//and uses the forEach method to print only the positive numbers.//
var nums = [3,-9,10,-15,4,-78,3,-90];

var printPositives = nums.forEach(function(x) {
    if (x>=0) {
        console.log(x);
    }
})

  
  
var printPositives = nums.filter((x) => x>0 );
console.log(printPositives);