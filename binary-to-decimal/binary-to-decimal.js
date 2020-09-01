/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
const getDecimalValueParseInt = (head) => {
  let binary = "";
  while (head) {
    binary += head.val;
    head = head.next;
  }
  return parseInt(binary, 2);
};

const getDecimalValueBitwise = (head) => {
  let result = 0;
  while (head) {
    result = (result << 1) | head.val;
    head = head.next;
  }
  return result;
};
