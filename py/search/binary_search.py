import math


def find(arr: 'list[int]', key: int) -> int:
    midIdx = math.floor(len(arr) / 2)
    midVal = arr[midIdx]

    print(arr, len(arr), midIdx, midVal)

    if key == midVal:
        return midIdx

    if key < midVal:
        return find(arr[:midIdx], key)

    if key > midVal:
        return midIdx + find(arr[midIdx:], key)


if __name__ == '__main__':
    arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 34]
    key = 35
    print(find(arr, key))
