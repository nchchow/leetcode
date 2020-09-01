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
 * @param {number} L
 * @param {number} R
 * @return {number}
 */
var rangeSumBST = function (root, L, R) {
  let sum = 0;
  let traverse = (tree) => {
    if (tree.left) traverse(tree.left);

    if (tree.val && tree.val >= L && tree.val <= R) sum += tree.val;

    if (tree.right) traverse(tree.right);
  };

  traverse(root);
  return sum;
};
