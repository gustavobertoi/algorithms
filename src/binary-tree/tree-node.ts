export class TreeNode {
  private readonly value: number;

  private leftNode: TreeNode;
  private rightNode: TreeNode;

  constructor(number: number) {
    this.value = number;
  }

  getValue() {
    return this.value;
  }

  setLeftNode(leftNode: TreeNode) {
    this.leftNode = leftNode;
    return this;
  }

  getLeftNode() {
    return this.leftNode;
  }

  hasLeftNode() {
    return Boolean(this.leftNode);
  }

  setRightNode(node: TreeNode) {
    this.rightNode = node;
    return this;
  }

  getRightNode() {
    return this.rightNode;
  }

  hasRightNode() {
    return Boolean(this.rightNode);
  }
}
