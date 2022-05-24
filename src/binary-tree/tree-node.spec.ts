import { TreeNode } from './tree-node';

describe('TreeNode class', () => {
  it('Should create a TreeNode instance correctly', () => {
    const node = new TreeNode(1);
    expect(node).toBeInstanceOf(TreeNode);
    expect(node.getValue()).toBe(1);
  });

  it('Should add a right TreeNode instance in a root TreeNode instance', () => {
    const node = new TreeNode(1);
    node.addRight(new TreeNode(2));
    expect(node.right()).toBeInstanceOf(TreeNode);
    expect(node.right().getValue()).toBe(2);
  });

  it('Should add a left TreeNode instance in a root TreeNode instance', () => {
    const node = new TreeNode(1);
    node.addLeft(new TreeNode(2));
    expect(node.left()).toBeInstanceOf(TreeNode);
    expect(node.left().getValue()).toBe(2);
  });
});
