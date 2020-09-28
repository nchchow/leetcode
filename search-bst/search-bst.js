/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// recursive
const searchBST = (root, val) => {
  if (root) {
    if (root.val === val) return root;
    return root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);
  }
  return null;
};

// one line
const searchBST = (root, val) =>
  root === null || root.val === val
    ? root.val > val ? searchBST(root.left, val) : searchBST(root.right, val);

// iterative
const searchBST = (root, val) => {
  while (root) {
    if (root.val === val) return root;
    root = root.val > val ? root.left : root.right;
  }
  return root;
};
