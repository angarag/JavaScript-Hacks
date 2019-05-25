/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
/*
Depth First Traversals:
(a) Inorder (Left, Root, Right) : 4 2 5 1 3
(b) Preorder (Root, Left, Right) : 1 2 4 5 3
(c) Postorder (Left, Right, Root) : 4 5 2 3 1
BFS: Root,Left,Right
*/
/*
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  let arr = [];
  if (root != null) {
    console.log(root.val);
    arr.push(root.val);
    let l = preorderTraversal(root.left);
    let r = preorderTraversal(root.right);
    if (l) arr.push(...l);
    if (r) arr.push(...r);
    console.log(arr);
    return arr;
  }
  return arr;
};
var postorderTraversal = function(root) {
  let arr = [];
  if (root != null) {
    let l = postorderTraversal(root.left);
    if (l) arr.push(...l);
    let r = postorderTraversal(root.right);
    if (r) arr.push(...r);
    arr.push(root.val);
  }
  return arr;
};
var inorderTraversal = function(root) {
  let arr = [];
  if (root != null) {
    let l = inorderTraversal(root.left);
    if (l) arr.push(...l);
    arr.push(root.val);
    let r = inorderTraversal(root.right);
    if (r) arr.push(...r);
  }
  return arr;
};

//BFS = levelOrder
/*
Given binary tree [3,9,20,null,null,15,7],
[
    [3],
    [9,20],
    [null,null,15,7] //null can be excluded
  ]
  */
var levelOrder = function(root) {
  let arr = [];
  let d = bfs(root, 0);
  function bfs(root, d) {
    if (arr[d] == undefined) arr[d] = [];
    if (root) {
      arr[d].push(root.val);
      bfs(root.left, d + 1);
      bfs(root.right, d + 1);
    } else arr[d].push(null); //null node & null leaves included!!!
  }
  return arr;
};

//Max depth
var maxDepth = function(root) {
  if (root == null) return 0;
  let d = helper(root, 1);
  function helper(root, depth) {
    if (root == null) return depth - 1;
    let l = helper(root.left, depth + 1);
    let r = helper(root.right, depth + 1);
    return l > r ? l : r;
  }
  return d;
};

//Root-to-leaf path sum
var hasPathSum = function(root, sum) {
  if (root == null) return false;
  if (root.left == null && root.right == null && root.val == sum) return true;
  if ((root.left == null || root.right == null) && root.val == sum)
    return false;
  let sums = new Set();
  helper(root, 0);
  function helper(r, val) {
    if (r) {
      val += r.val;
      //if to collect only root-to-leafe path if leaf has no children
      if (r.left == null && r.right == null) sums.add(val); //only leaf path sums being collected
      helper(r.left, val);
      helper(r.right, val);
    }
    /* if to collect all paths
    else {
        sums.add(val);
    }
    */
  }
  let arr = Array.from(sums.values());
  for (let a of arr) if (a == sum) return true;
  return false;
};
