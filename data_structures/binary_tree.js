/**
 * Definition for a binary tree node.
 */
function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}
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

//BFS = inorder
var levelOrder = function(root) {
  let arr = [];
  if (root != null) {
    arr.push(root.val);
    l = levelOrder(root.left);
    if (l) arr.push(l);
    r = levelOrder(root.right);
    if (r) arr.push(r);
  }
  console.log(arr);
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
