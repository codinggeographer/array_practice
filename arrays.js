var stringArray = ["string1", "string2", "string3", "string4"]
var numberArray = [1, 2, 3, 4]
var booleanArray = [true, false, true, false]

// calls .pop() method on stringArray
stringArray.pop();
// should remove last element from the array
console.log(stringArray);
// should print out all except "string4"

// calls .length() on numberArray
console.log(numberArray.length);
// will give the length / count of how 
// many elements are inside array
// will print out 4

console.log(booleanArray[1]);
// should return "false" beause the 
// element with index 1 in the booleansArray
// is false