// find elements that exist in one array but not the other and add them to a return array
function diffArray(arr1, arr2) {
    var newArr = [];
    for (var i = 0; i < arr1.length; i++) {
      if (arr2.indexOf(arr1[i]) === -1){
        newArr.push(arr1[i]);
      } 
    }
    for (var j = 0; j < arr2.length; j++) {
      if (arr1.indexOf(arr2[j]) === -1){ 
        newArr.push(arr2[j]);
      } 
    }
    
    return newArr;
}
 
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // [4]
diffArray([1, 2, 3, 5,6,7,8], [1, 2, 3, 4, 5,7]); // [4, 6, 8]