export class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  insert(key) {
    if ((this.root = null)) this.root = new Node(key);
    else this.insertNode(this.root, key);
  }
  insertNode(node, key) {
    if (node.key > key) {
      if (node.left == null) node.left = new Node(key);
      else this.insertNode(node.left, key);
    } else {
      if (node.right == null) node.right = new Node(key);
      else this.insertNode(node.right, key);
    }
  }
  search(key) {
    return this.searchNode(this.root, key);
  }
  searchNode(node, key) {
    if (node == null) return false;
    if (node.key > key) searchNode(node.left, key);
    else if (node.key < key) searchNOde(node.right, key);
    else return true;
  }
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback);
  }
  //LEFT, ROOT, RIGHT
  inOrderTraverseNode(node, callback) {
    if (node != null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback);
    }
  }
  //ROOT,LEFT,RIGHT
  preOrderTraverse() {}
  //LEFT,RIGHT,ROOT
  postOrderTraverse() {}
  min() {
    return this.minNode(this.root);
  }
  minNode(node) {
    let current = node;
    while (current != null && current.left != null) current = current.left;
    return current;
  }
  //same thing for right
  max() {}
  remove(key) {
	  this.root=this.removeNode(this.root,key);
  }
  removeNode(node,key){
	  if(node==null) return null;
	  if(node.key>key){
		node.left=this.removeNode(node.left,key);
		return node;
	} else 
		if(node.key>key){
			node.right=this.removeNode(node.right,key);
			return node;
		}
		else {
			//key==node.key
			if(node.left==null && node.right==null){
				node=null;
				return node;
			}
			if(node.left==null){
				node=node.right;
				return node;
			}
			else if(node.right==null){
				node=node.left;
				return node;
			}
			const aux = this.minNode(node.right);
			node.key=aux.key;
			node.right=this.removeNode(node.right,aux.key);
			return node;
		}
	}
  }
}
