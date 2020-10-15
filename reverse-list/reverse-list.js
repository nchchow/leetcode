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
// initial solution
const reverseList = (head) => {
  if (!head) return head;
  let out;
  let temp = head;
  let tail = new ListNode(temp.val, null);
  temp = temp.next;
  while (temp) {
    out = new ListNode(temp.val, tail);
    tail = out;
    temp = temp.next;
  }
  return out || tail;
};

// clean solution
const reverseList = (head) => {
  let prev = null;
  let curr = head;
  let next = null;
  while (curr) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
};
