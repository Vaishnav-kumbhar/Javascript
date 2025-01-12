/**
 *
 */
// let minDifference = function (nums) {
//   if (nums.length <= 4) {
//     return 0;
//   }
//   nums.sort((a, b) => a - b);
//   console.log(nums)
//   let ans = nums[nums.length - 1] - nums[0]; // 10 - 1 = 9
//   console.log(ans)
//   for (let i = 0; i <= 3; i++) {
//     ans = Math.min(ans, nums[nums.length - (3 - i) - 1] - nums[i]); //  [3,1,4, 5]
//   }
//   return ans;
// };

// const ans = minDifference([1, 5, 5, 4, 10) {;
// console.log(ans);

/*
const findMinDifference = (nums) => {
  nums.sort((a, b) => a - b);
  let ans = nums[nums.length - 1] - nums[0];
  for (let i = 0; i <= 3; i++) {
    ans = Math.min(ans, nums[nums.length - (3 - i) - 1] - nums[i]); 
  }
  return ans;
};

const ans = findMinDifference([10, 5, 6, 4]);
console.log(ans);
*/

/*
// sum of nodes
let head = [0, 3, 1, 0, 4, 5, 2, 0];
const mergeNodes = function (hd) {

  let firstNodeResult = 0;
  let secondNodeResult = 0;
  let result = [];

  if (hd[3] === 0) {
    // it execute 4 times and assigned value to firstNodeResult
    for (let i = 0; i <= 3; i++) {
      firstNodeResult += hd[i];
    }
    // push firstNodeResult to the result array
    result.push(firstNodeResult);
  }

  if (hd.includes(4)) {
    // it start executing from  -4 index of head array and execute till last index of head array element.
    for (let i = hd.length - 4; i <= hd.length - 1; i++) {
      secondNodeResult += hd[i];
    }
    // push secondNodeResult  to the result array
    result.push(secondNodeResult);
  }

  return result; // it returns result array to the caller
};

const finalResult = mergeNodes(head);
console.log(finalResult);
*/

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

const mergeNodes = function (head) {
  let modify = head.next; // Start from the node after the initial 0
  let nextSum = modify;

  while (nextSum !== null) {
    let sum = 0;
    // Find the sum of all nodes until you encounter a 0.
    while (nextSum.includes() !== 0) {
      sum += nextSum.val;
      nextSum = nextSum.next;
    }

    // Assign the sum to the current node's value.
    modify.val = sum;
    // Move nextSum to the first non-zero value of the next block.
    nextSum = nextSum.next;
    // Move modify also to this node.
    modify.next = nextSum;
    modify = modify.next;
  }
  return head.next; // Skip the initial 0 node
};

let head = [0, 3, 1, 0, 4, 5, 2, 0];
const result = mergeNodes(head);
console.log(head);
