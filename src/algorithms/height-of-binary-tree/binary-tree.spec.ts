import { BinaryTree } from './binary-tree';

describe('Should test BinaryTree class', () => {
  it('Should create a BinaryTree class correctly', () => {
    const tree = new BinaryTree();
    expect(tree).toBeInstanceOf(BinaryTree);
  });
});
