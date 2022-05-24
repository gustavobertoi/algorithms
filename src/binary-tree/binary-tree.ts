import { TreeNode } from './tree-node';

export class BinaryTree {
  private root: TreeNode;

  setRoot(rootNode: TreeNode) {
    this.root = rootNode;
    return this;
  }

  getRoot() {
    return this.root;
  }

  height(incomingNode?: TreeNode): number {
    const node = incomingNode ? incomingNode : this.root;

    if (!node) {
      return 0;
    }

    const hasRight = Boolean(node.right());
    const hasLeft = Boolean(node.left());

    const hasRightOrLeft = hasRight || hasLeft;

    if (!hasRightOrLeft) {
      return 1;
    }

    const rightHeight = hasRight ? this.height(node.right()) : 0;
    const leftHeight = hasLeft ? this.height(node.left()) : 0;

    const height = rightHeight > leftHeight ? rightHeight + 1 : leftHeight + 1;

    return height;
  }
}
