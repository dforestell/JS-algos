// Make a function that looks through an array of objects (first argument) and returns an array of 
// all objects that have matching name and value pairs (second argument). Each name and value pair 
// of the source object has to be present in the object from the collection if it is to be 
// included in the returned array.

function whatIsInAName(collection, source) {
    let arr = [];
    let keys = Object.keys(source)
    arr = collection.filter(obj => obj.hasOwnProperty(keys[0]) && obj[keys[0]] === source[keys[0]])
    return arr;
  }
  
  whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });