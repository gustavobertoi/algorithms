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

    const hasLeftOrRightNode = node.hasLeftNode() || node.hasRightNode();

    if (!hasLeftOrRightNode) {
      return 1;
    }

    const nodeA = this.height(node.getLeftNode());
    const nodeB = this.height(node.getRightNode());

    const height = nodeA > nodeB ? nodeA + 1 : nodeB + 1;

    return height;
  }
}
