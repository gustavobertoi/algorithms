export class TreeNode {
  readonly value: number;

  private left: TreeNode;
  private right: TreeNode;

  constructor(number: number) {
    this.value = number;
  }

  setLeft(node: TreeNode) {
    this.left = node;
    return this;
  }

  getLeft() {
    return this.left;
  }

  setRight(node: TreeNode) {
    this.right = node;
    return this;
  }

  getRight() {
    return this.right;
  }
}
