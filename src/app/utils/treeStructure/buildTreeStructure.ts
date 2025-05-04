import { TreeItemSource, TreeNode } from "./treeStructureTypes";

/**
 * buildTree constructs a nested tree from a dictionary of items.
 * Each key in the dictionary is treated as an item id, and the corresponding
 * value can optionally include a parentId.
 *
 * @param dict - A dictionary where keys are item ids and values are items.
 * @returns An array of TreeNode objects representing the tree.
 */
export function buildTree<SourceType extends TreeItemSource>(
  dict: Record<string, SourceType>
): Array<TreeNode<SourceType>> {
  const nodes: Record<string, TreeNode<SourceType>> = {};

  // Step 1: Initialize all nodes
  for (const id in dict) {
    const data = dict[id];
    nodes[id] = { ...data, id, children: [], nestingLevel: 0 };
  }

  const tree: Array<TreeNode<SourceType>> = [];

  // Step 2: Build tree structure
  for (const id in nodes) {
    const node = nodes[id];
    if (node.parentId && nodes[node.parentId]) {
      nodes[node.parentId].children.push(node);
    } else {
      tree.push(node); // Root nodes
    }
  }

  // Step 3: Set nesting levels recursively
  const setNesting = (node: TreeNode<SourceType>, level: number) => {
    node.nestingLevel = level;
    for (const child of node.children) {
      setNesting(child, level + 1);
    }
  };

  for (const root of tree) {
    setNesting(root, 0); // Start from root level 0
  }

  return tree;
}
