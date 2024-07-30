/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */
class ListNode {
  val: number
  next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

function insert(root: ListNode | null, item: number): ListNode { 
  let temp = new ListNode(); 
  temp.val = item; 
  temp.next = root; 
  root = temp; 
  return root; 
} 

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  let first: number[] = [];
  while (l1) {
    first.push(l1.val);
    l1 = l1.next;
  }

  let second: number[] = [];
  while (l2) {
    second.push(l2.val);
    l2 = l2.next;
  }


  const arr = (BigInt(first.reverse().join('')) + BigInt(second.reverse().join(''))).toString().split('').reverse();


  let root: ListNode | null = null; 
  for (let i = arr.length - 1; i >= 0; i--) root = insert(root, Number(arr[i])); 

  return root
};