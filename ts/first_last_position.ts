/**
 * Given a sorted arrray of intergers arr and an integer target,
 * find the index of the first and last position of target in arr.
 * If target is not in arr, return [-1, -1]
 * 
 * @example
 * ➜ console.log(solution([2, 4, 5, 5, 5, 5, 5, 7, 9, 9], 5))
 * [2, 6]
 */

export { }
const array = [2, 4, 5, 5, 5, 5, 5, 7, 9, 9]
console.log(solution(array, 2))

function solution(arr: number[], target: number): [number, number] {
  let start = -1
  let end = -1
  for (const [i, num] of arr.entries()) {
    if (num === target) {
      end = i
      if (start < 0) start = i
    }
  }

  return [start, end]
}