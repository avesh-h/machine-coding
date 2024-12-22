import React, { useCallback, useState } from "react";
import explorer from "../static/folderData";
import File from "./File";
import useTraverseTree from "../hooks/useTraverseTree";

const Explorer = () => {
  const [explorerTree, setExplorerTree] = useState(explorer);
  const { insertNode, deleteNode, updateNode } = useTraverseTree();

  const handleInsertNode = useCallback(
    (item, folderId, isFolder) => {
      const updatedTree = insertNode(explorerTree, folderId, item, isFolder);
      setExplorerTree(updatedTree);
    },
    [explorerTree, insertNode]
  );

  const handleDeleteNode = useCallback(
    (itemId) => {
      const updatedTree = deleteNode(explorerTree, itemId);
      setExplorerTree(updatedTree);
    },
    [deleteNode, explorerTree]
  );

  const handleUpdateNode = useCallback(
    (updatedNodeObj, itemId) => {
      const updatedTree = updateNode(explorerTree, updatedNodeObj, itemId);
      setExplorerTree(updatedTree);
    },
    [explorerTree, updateNode]
  );

  return (
    <div>
      <File
        explorer={explorerTree}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleUpdateNode={handleUpdateNode}
      />
    </div>
  );
};

export default Explorer;
