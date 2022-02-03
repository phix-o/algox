/**
 * Given 2 strings s1 and s2, check if they're anagrams
 * Two strings are anagrams if they're made of the same characters with the same frequencies
 * 
 * @example
 * s1 = danger
 * s2 = garden
 * solution(s1, s1) === true
 */

export {}

const str1 = 'danger'.repeat(1e7)
const str2 = 'garden'.repeat(1e7)
console.log(solution(str1, str2))

function solution(s1: string, s2: string): boolean {
  if (s1.length !== s2.length) return false

  const s1Freq: Record<string, number> = {}
  const s2Freq: Record<string, number> = {}

  for (let i = 0; i < s1.length; ++i) {
    const s1Char = s1[i]
    const s2Char = s2[i]

    if (!s1Freq[s1Char])
      s1Freq[s1Char] = 1
    else
      s1Freq[s1Char] += 1

    if (!s2Freq[s2Char])
      s2Freq[s2Char] = 1
    else
      s2Freq[s2Char] += 1
  }

  const entries = Object.entries(s1Freq)
  for (const [char, freq] of entries) {
    if (!s2Freq[char]) return false
    if (freq !== s2Freq[char]) return false
  }

  return true
}