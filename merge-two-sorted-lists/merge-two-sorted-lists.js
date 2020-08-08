// Definition for singly-linked list.
const ListNode = (val, next) => {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
};

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const mergeTwoLists = (l1, l2) => {
  let newList = new ListNode(null, null);
  let prev = newList;

  while (l1 && l2) {
    // compare both values, append smaller to new list
    if (l1.val < l2.val) {
      prev.next = l1;
      l1 = l1.next;
    } else {
      prev.next = l2;
      l2 = l2.next;
    }
    prev = prev.next;
  }

  if (l1 === null) prev.next = l2;
  if (l2 === null) prev.next = l1;

  return newList.next;
};
