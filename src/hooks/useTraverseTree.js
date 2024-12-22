const useTraverseTree = () => {
  //Adding
  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      // For parent process
      const latestNode = {
        id: new Date().getTime(),
        name: item,
        isFolder,
        ...(isFolder ? { items: [] } : {}),
      };
      tree.items.unshift(latestNode);
      return { ...tree, items: [latestNode, ...tree.items] }; // Ensure immutability;
    } else {
      //for childe process
      let latestTree = [];
      if (tree?.items) {
        latestTree = tree.items.map((t) => {
          return insertNode(t, folderId, item, isFolder);
        });
      }
      // for mutate the state directly so we did return the clone of updated state
      return { ...tree, items: latestTree };
    }
  }

  //Update
  const updateNode = (tree, itemObj, itemId) => {
    const itemIdx = tree.items.findIndex((t) => t.id === itemId);
    if (itemIdx !== -1) {
      tree.items.splice(itemIdx, 1, itemObj);
      return { ...tree };
    } else {
      let updatedTree = [];
      updatedTree = tree.items.map((t) => {
        return updateNode(t, itemObj, itemId);
      });
      return { ...tree, items: updatedTree };
    }
  };

  //Delete node
  const deleteNode = (tree, itemId) => {
    if (tree.items.find((t) => t.id === itemId)) {
      const updatedTreeItems = tree.items.filter((item) => item.id !== itemId);
      return { ...tree, items: updatedTreeItems };
    } else {
      let updatedTree = [];
      updatedTree = tree.items.map((t) => {
        return deleteNode(t, itemId);
      });
      return { ...tree, items: updatedTree };
    }
  };
  return { insertNode, updateNode, deleteNode };
};

export default useTraverseTree;
