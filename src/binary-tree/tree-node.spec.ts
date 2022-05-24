import { TreeNode } from './tree-node';

describe('Should test TreeNode class', () => {
  it('Should create a TreeNode instance correctly', () => {
    const node = new TreeNode(1);
    expect(node).toBeInstanceOf(TreeNode);
    expect(node.getValue()).toBe(1);
  });

  it('Should add a right TreeNode instance in a TreeNode root instance', () => {
    const node = new TreeNode(1);
    node.setRightNode(new TreeNode(2));
    expect(node.getRightNode()).toBeInstanceOf(TreeNode);
    expect(node.getRightNode().getValue()).toBe(2);
  });

  it('Should add a left TreeNode instance in a TreeNode root instance', () => {
    const node = new TreeNode(1);
    node.setLeftNode(new TreeNode(2));
    expect(node.getLeftNode()).toBeInstanceOf(TreeNode);
    expect(node.getLeftNode().getValue()).toBe(2);
  });

  it('Should add a right TreeNode instance and verify if exists or not', () => {
    const node = new TreeNode(1);
    node.setRightNode(new TreeNode(2));
    expect(node.hasRightNode()).toBe(true);
  });

  it('Should add a left TreeNode instance and verify if exists or not', () => {
    const node = new TreeNode(1);
    node.setLeftNode(new TreeNode(2));
    expect(node.hasLeftNode()).toBe(true);
  });
});
