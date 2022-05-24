import { TreeNode } from './tree-node';
import { BinaryTree } from './binary-tree';

describe('BinaryTree class', () => {
  it('Should create a BinaryTree class correctly', () => {
    const tree = new BinaryTree();
    expect(tree).toBeInstanceOf(BinaryTree);
  });

  it('Should set a root node correctly', () => {
    const tree = new BinaryTree();
    tree.setRoot(new TreeNode(1));
    expect(tree.getRoot()).toBeInstanceOf(TreeNode);
  });

  it('Should get a root node correctly', () => {
    const tree = new BinaryTree();
    tree.setRoot(new TreeNode(1));
    expect(tree.getRoot().getValue()).toBe(1);
  });

  describe('Height method', () => {
    it('Should return 0 for an empty tree', () => {
      const tree = new BinaryTree();
      expect(tree.height()).toBe(0);
    });

    it('Should return 1 for a tree with a single node', () => {
      const tree = new BinaryTree();
      const height = tree.setRoot(new TreeNode(1)).height();
      expect(height).toBe(1);
    });

    it('Should return 2 for a tree with a single node and a left node', () => {
      const tree = new BinaryTree();

      tree
        .setRoot(new TreeNode(1))
        .getRoot()
        .addLeft(new TreeNode(2))
        .addRight(new TreeNode(3));

      const height = tree.height();

      expect(height).toBe(2);
    });

    /**
     * EXPECTED TREE:
     * 		  1
     *     /  \
     *    2    3
     *   /    /  \
     *  4    5    6
     *   \       /
     *    7     8
     *           \
     *            9
     **/
    // it('Should return 5 when tree has a simple complex logic', () => {
    //   const tree = new BinaryTree();

    //   tree
    //     .setRoot(new TreeNode(1))
    //     .getRoot()
    //     .setLeftNode(new TreeNode(2))
    //     .setRightNode(new TreeNode(3));

    //   tree
    //     .getRoot()
    //     .getLeftNode()
    //     .setLeftNode(new TreeNode(4))
    //     .getLeftNode()
    //     .setRightNode(new TreeNode(7));

    //   tree
    //     .getRoot()
    //     .getRightNode()
    //     .setLeftNode(new TreeNode(5))
    //     .setRightNode(new TreeNode(6))
    //     .getRightNode()
    //     .setLeftNode(new TreeNode(8))
    //     .getLeftNode()
    //     .setRightNode(new TreeNode(9));

    //   const height = tree.height();

    //   expect(height).toBe(5);
    // });
  });
});
