//sum the numbers between the two numbers in the accepted array
function sumAll(arr) {
    let small;
    let big;
    let sum = 0;
    if (arr[0] > arr[1]){
      small = arr[1]
      big = arr[0]
    }else{
      small = arr[0]
      big = arr[1]
    }
  
    while (small <= big){
       sum += small
       small++
    }
    return sum
  }
  
sumAll([1, 4]); // 10
sumAll([5,1]); //15