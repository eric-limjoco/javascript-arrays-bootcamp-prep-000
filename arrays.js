var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArrray(array, el){
  var newArray = [el, ...array]
  return newArray
}

function destructivelyAddElementToBeginningOfArrray(array, el){
  return array.unshift(el)
}