/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = (head) => {
  let newList = head;

  while (newList && newList.next) {
    if (newList.val === newList.next.val) {
      newList.next = newList.next.next;
    } else {
      newList = newList.next;
    }
  }
  return head;
};
