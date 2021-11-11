def sort(array: list, ascending=True) -> list:
    array_sorted = []

    while len(array) != 0:
        item_of_interest_index = 0
        item_of_interest = array[item_of_interest_index]

        for index, item in enumerate(array):
            if ascending is True and item < item_of_interest:
                item_of_interest = item
                item_of_interest_index = index
            elif ascending is False and item > item_of_interest:
                item_of_interest = item
                item_of_interest_index = index

        array_sorted.append(item_of_interest)
        array.pop(item_of_interest_index)

    return array_sorted


if __name__ == '__main__':
    array = [4, 2, 3, 45, 8, 1, 2, 0, -5, -12, 10, 45]
    print(sort(list(array)))
    print(sort(list(array), False))
