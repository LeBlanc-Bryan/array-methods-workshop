function printPositives(arr) {
  arr.forEach(function(num) {
    if (num > 0) {
      console.log(num);
    }
  })
}

var numArray = [1, 4, -4, 34, -100, 56, -423];

printPositives(numArray);
//
function filterThenPrint(arr) {
  arr.filter(function(num) {
      return num > 0;
    })
    .forEach(function(num) {
      console.log(num);
    })
}
filterThenPrint(numArray);
//
var filterArray = Array.prototype.filter;
//
var myStr = "this is a really long string I wrote for the purposes of demonstrating longest word.";

function longestWord(str) {
  return str.split(" ").reduce(function(longest, word) {
    if (longest.length < word.length) {
      longest = word;
    }
    return longest;
  }, "")
}

console.log(longestWord(myStr));
//
var qbf = "the quick brown fox";
var vowelArr = ["a", "e", "i", "o", "u"]

function countVowels(str) {
  return str.toLowerCase().split("").reduce(function(count, letter) {
    if (vowelArr.indexOf(letter) >= 0) {
      count = count + 1;
    }
    return count;
  }, 0);
}
console.log(countVowels(myStr));
console.log(countVowels(qbf));
//
function highLow(arr) {
  var highNum = arr.reduce(function(highest, num) {
    if (highest < num) {
      highest = num;
    }
    return highest;
  }, -Infinity);
  var lowNum = arr.reduce(function(lowest, num) {
    if (lowest > num) {
      lowest = num;
    }
    return lowest;
  }, Infinity);
  return {
    highest: highNum,
    lowest: lowNum
  };
}
console.log(highLow(numArray));
var testArr = [13, 14, 15, 16];
var testArr2 = [-14, -15, -16];
console.log(highLow(testArr));
console.log(highLow(testArr2));
//
function countChars(str) {
  var letterObject = {};
  str.split("")
    .filter(function(letter) {
      return letter != " ";
    })
    .forEach(function(letter) {
      if (letterObject[letter]) {
        letterObject[letter] = letterObject[letter] + 1;
      }
      else {
        letterObject[letter] = 1;
      }
    })
  return letterObject;
}
console.log(countChars(qbf));
//
function negate(fn) {
  return function(x) {
    return !fn(x);
  }
}