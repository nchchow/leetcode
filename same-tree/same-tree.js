/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
const isSameTreeRecursive = (p, q) => {
  // if both are none
  if (!p && !q) return true;
  // if only one are none or if the values are not the same
  if (!p || !q || p.val !== q.val) return false;
  // recursive call on left and right
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const isSameTreeOneLine = (p, q) => {
  return JSON.stringify(p) === JSON.stringify(q);
};
