//var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
var newArr = [element, ...array];
return newArr;
}


function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element);
  return array;

}

function addElementToEndOfArray (array, element) {
  var newArr = [...array, element];
  return newArr;
}

function destructivelyAddElementToEndOfArray(array, element) {

  array.push(element);
  return array;
}

function accessElementInArray(array, index) {
  return array[index];
}

function destructivelyRemoveElementFromBeginningOfArray(array, element){
  array.shift(element);
  return array;
}

function removeElementFromBeginningOfArray(array, element) {
  //removes array[0], starts from array [1]
  var newArr = array.slice(1);
  return newArr;
}

function destructivelyRemoveElementFromEndOfArray(array) {
//removing last alters array just use pop()
  array.pop();
  return array;
}

function removeElementFromEndOfArray(array, element) {
//slice takes up to last element
 var newArr = array.slice(0, array.length - 1);
  return newArr;
 }

 var items = [1, 2, 3, 4, 5]
 
// let's remove the third element
 
// a slice from the start up to but not including index 2 (the third element)
// and a slice from index 3 to the end
[...items.slice(0, 2), ...items.slice(3)] // [1, 2, 4, 5]
