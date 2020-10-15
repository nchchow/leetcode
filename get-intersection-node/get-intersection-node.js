/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
// by switching tracks
const getIntersectionNode = (headA, headB) => {
  if (!headA || !headB) return null;
  let a = headA;
  let b = headB;
  while (a !== b) {
    a = a.next;
    b = b.next;
    if (!a && !b) break;
    if (!a) a = headB;
    if (!b) b = headA;
  }
  return a;
};

// with set
const getIntersectionNode = (headA, headB) => {
  let currA = headA;
  let currB = headB;
  let set = new Set();
  while (currA) {
    set.add(currA);
    currA = currA.next;
  }
  while (currB) {
    if (set.has(currB)) {
      return currB;
    }
    currB = currB.next;
  }
  return null;
};
