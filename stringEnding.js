// dont use endsWith()
function confirmEnding(str, target) {
   let sliceStart = str.length - target.length
    let endOfString = str.slice(sliceStart, str.length)
    return target === endOfString;
  }
  
confirmEnding("Bastian", "n"); // true
confirmEnding("Bastian", "l"); // false
console.log(confirmEnding("Bet", "et")); // true
confirmEnding("Bet", "a"); // false
