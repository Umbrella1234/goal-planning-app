export type TreeItemSource = { parentId?: string };

export type TreeNode<TChild = object> = TreeItemSource &
  TChild & {
    id: string;
    children: Array<TreeNode<TChild>>;
    nestingLevel: number;
  };
