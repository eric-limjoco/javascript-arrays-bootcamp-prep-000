var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, el){
  var newArray = [el, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, el){
  array.unshift(el)
  return array
}

function accessElementInArray(array, i) {
  return array[i]
}