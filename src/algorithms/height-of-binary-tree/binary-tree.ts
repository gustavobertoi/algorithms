import { TreeNode } from './tree-node';

export class BinaryTree {
  public root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  height(node: TreeNode): number {
    const isNodeNull = node === null;

    if (isNodeNull) {
      return 0;
    }

    const nodeA = this.height(node.getLeft());
    const nodeB = this.height(node.getRight());

    const height = nodeA > nodeB ? nodeA + 1 : nodeB + 1;

    return height;
  }
}
