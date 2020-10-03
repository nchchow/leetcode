/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = (head) => {
  let res = (list = head);
  for (let n = 1; list; n++) {
    if (n % 2 === 0) res = res.next;
    list = list.next;
  }
  return res;
};
