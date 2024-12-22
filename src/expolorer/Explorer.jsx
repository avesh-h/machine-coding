import React, { useCallback, useState } from "react";
import explorer from "../static/folderData";
import File from "./File";
import useTraverseTree from "../hooks/useTraverseTree";

const Explorer = () => {
  const [explorerTree, setExplorerTree] = useState(explorer);
  const { insertNode, deleteNode } = useTraverseTree();

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
      console.log("finallllllllll", updatedTree);
      setExplorerTree(updatedTree);
    },
    [deleteNode, explorerTree]
  );

  return (
    <div>
      <File
        explorer={explorerTree}
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  );
};

export default Explorer;
