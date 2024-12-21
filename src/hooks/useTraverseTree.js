const useTraverseTree = () => {
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      const latestNode = {
        id: new Date().getTime(),
        name: item,
        isFolder,
        ...(isFolder ? { items: [] } : {}),
      };
      tree.items.unshift(latestNode);
      return tree;
    } else {
      let latestTree = [];
      if (tree?.items) {
        latestTree = tree.items.map((t) => {
          return insertNode(t, folderId, item, isFolder);
        });
      }
      return { ...tree, items: latestTree };
    }
  }

  const updateNode = () => {};
  const deleteNode = () => {};
  return { insertNode };
};

export default useTraverseTree;
