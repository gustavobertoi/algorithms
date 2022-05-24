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

    const hasLeftOrRightNode = node.right() || node.left();

    if (!hasLeftOrRightNode) {
      return 1;
    }

    const nodeA = this.height(node.right());
    const nodeB = this.height(node.left());

    const height = nodeA > nodeB ? nodeA + 1 : nodeB + 1;

    return height;
  }
}
