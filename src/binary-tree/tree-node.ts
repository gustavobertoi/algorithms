export class TreeNode<Type = any> {
  private readonly data: Type;

  private _left?: TreeNode;
  private _right?: TreeNode;

  constructor(data: Type) {
    this.data = data;
    this._left = undefined;
    this._right = undefined;
  }

  getValue(): Type {
    return this.data;
  }

  addLeft(node: TreeNode) {
    this._left = node;
    return this;
  }

  left() {
    return this._left;
  }

  addRight(node: TreeNode) {
    this._right = node;
    return this;
  }

  right() {
    return this._right;
  }
}
