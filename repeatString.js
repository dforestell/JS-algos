// repeat the given string a number of times
function repeatStringNumTimes(str, num) {
    let i = 1;
    let repeated = ''
    while (i <= num){
        repeated = repeated + str 
        i++
    }
    return repeated;
  }
  
repeatStringNumTimes("abc", 3); //"abcabcabc"
console.log(repeatStringNumTimes("Ha", 5)); //"HaHaHaHaHa"