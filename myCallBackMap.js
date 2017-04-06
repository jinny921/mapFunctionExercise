// Implement your own version of the built-in array map function.

// Yours will take in two arguments.
//The first will be an array to map
//the second will be a callback function
//The function will return a new array based on the results of the callback function.


var words = ["ground", "control", "to", "major", "tom"];

function map(myArray, cb) {
  var lengthArray = [];
  for(i of myArray) {
    lengthArray.push(cb(i));
  }
  console.log(lengthArray);
}


// result output: [6, 7, 2, 5, 3]
//word = index inside the words array
//word.length = each index's word length

map(words, function(word) {
  return word.length;
});




