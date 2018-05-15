var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray(array, el){
  var newArray = [el, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArray(array, el){
  return array.unshift(el)
}