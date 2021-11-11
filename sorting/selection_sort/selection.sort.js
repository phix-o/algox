function sort(array, ascending = true) {
  const arraySorted = []

  while (array.length !== 0) {
    let itemOfInterestIndex = 0
    let itemOfInterest = array[itemOfInterestIndex]
    
    array.forEach((item, index) => {
      if (ascending && item < itemOfInterest) {
        itemOfInterest = item
        itemOfInterestIndex = index
      } else if (!ascending && item > itemOfInterest) {
        itemOfInterest = item
        itemOfInterestIndex = index
      }
    });

    arraySorted.push(itemOfInterest)
    array.splice(itemOfInterestIndex, 1)
  }

  return arraySorted
}

const array = [4, 2, 3, 45, 8, 1, 2, 0, -5, -12, 10, 45]
console.log(sort(Array.from(array)))
console.log(sort(Array.from(array), false))