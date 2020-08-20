/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const mergeTwoLines = (nums1, m, nums2, n) => {
  // js built-in functions
  nums1.splice(m, n, ...nums2); // combine
  nums1.sort((a, b) => a - b);
};

const mergeBrute = (nums1, m, nums2, n) => {
  let j = 0;
  for (let i = 0; i < m; i++) {
    if (nums1[i] > nums2[j]) {
      // swap & sort nums2
      let temp = nums1[i];
      nums1[i] = nums2[j];
      nums2[j] = temp;
      nums2.sort((a, b) => a - b);
    }
  }
  // append the rest
  for (let i = m; i < nums1.length; i++) {
    nums1[i] = nums2[j++];
  }
};
