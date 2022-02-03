/**
 * Given a binary tree root, check if it's symmetric around its center
 * i.e (a mirror of itself)
 */
export { }

interface IBinaryTree {
  value: number,
  left?: IBinaryTree
  right?: IBinaryTree
}

const rootInvalid: IBinaryTree = {
  value: 9,
  left: {
    value: 5,
    left: {
      value: 2,
      left: {
        value: 9,
        left: { value: 3 },
        right: { value: 0 },
      },
      right: {
        value: 7,
        right: { value: 6 }
      }
    },
    right: {
      value: 8,
      left: { value: 1 }
    }
  },
  right: {
    value: 5,
    left: {
      value: 8,
      right: { value: 1 }
    },
    right: {
      value: 2,
      left: {
        value: 4,
        left: { value: 6 }
      },
      right: {
        value: 9,
        left: { value: 0 },
        right: { value: 3 },
      }
    }
  }
}
const rootValid: IBinaryTree = {
  value: 9,
  left: {
    value: 5,
    left: {
      value: 2,
      left: {
        value: 9,
        left: { value: 3 },
        right: { value: 0 },
      },
      right: {
        value: 7,
        right: { value: 6 }
      }
    },
    right: {
      value: 8,
      left: { value: 1 }
    }
  },
  right: {
    value: 5,
    left: {
      value: 8,
      right: { value: 1 }
    },
    right: {
      value: 2,
      left: {
        value: 7,
        left: { value: 6 }
      },
      right: {
        value: 9,
        left: { value: 0 },
        right: { value: 3 },
      }
    }
  }
}
console.log(solution(rootValid))

function are_symmetric(root1?: IBinaryTree, root2?: IBinaryTree): boolean {
  if (!root1 && !root2) return true
  if (!root1 || !root2) return false
  if (root1.value === root2.value) {
    return are_symmetric(root1.left, root2.right) && are_symmetric(root1.right, root2.left)
  }

  return false
}

function solution(root?: IBinaryTree): boolean {
  if (!root) return true

  return are_symmetric(root.left, root.right)
}
