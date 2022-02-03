/**
 * Given an array of intergers arr and an integer k, find the kth largest element
 * 1 <= k <= |arr|
 * 
 * @example
 * $ console.log(solution([4,2,9,7,5,6,7,1,3], 4))
 * 6
 */

export {}
console.log(solution([4, 2, 9, 7, 5, 6, 7, 1, 3], 4))

function solution(arr: number[], k: number): number {
  arr.sort((a, b) => b - a)

  return arr[k - 1]
}