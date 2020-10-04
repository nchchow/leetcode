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
 * @return {boolean}
 */
const isUnivalTree = (root) => {
  const val = root.val;
  let res = true;
  const traverse = (tree) => {
    if (!tree) return;
    if (tree.left) traverse(tree.left);
    if (tree.val !== val) {
      res = false;
      return;
    }
    if (tree.right) traverse(tree.right);
  };
  traverse(root);
  return res;
};

const isUnivalTree = (root) => {
  const traverse = (tree, val) => {
    if (!tree) return true;
    if (tree.val !== val) return false;
    return traverse(tree.left, val) && traverse(tree.right, val);
  };
  return traverse(root, root.val);
};
