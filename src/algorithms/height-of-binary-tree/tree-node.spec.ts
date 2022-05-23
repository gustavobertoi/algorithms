import { TreeNode } from './tree-node';

describe('Should test TreeNode class', () => {
  it('Should create a TreeNode correctly', () => {
    const node = new TreeNode(1);
    expect(node).toBeInstanceOf(TreeNode);
    expect(node.value).toBe(1);
  });

  it('Should add a right TreeNode in a TreeNode Root', () => {
    const node = new TreeNode(1);
    node.setRight(new TreeNode(2));
    expect(node.getRight()).toBeInstanceOf(TreeNode);
    expect(node.getRight().value).toBe(2);
  });

  it('Should add a left TreeNode in a TreeNode Root', () => {
    const node = new TreeNode(1);
    node.setLeft(new TreeNode(2));
    expect(node.getLeft()).toBeInstanceOf(TreeNode);
    expect(node.getLeft().value).toBe(2);
  });
});
