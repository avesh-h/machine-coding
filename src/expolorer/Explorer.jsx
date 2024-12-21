import React, { useState } from "react";
import explorer from "../static/folderData";
import File from "./File";
import useTraverseTree from "../hooks/useTraverseTree";

const Explorer = () => {
  const [explorerTree, setExplorerTree] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const handleInsertNode = (item, folderId, isFolder) => {
    const updatedTree = insertNode(explorerTree, folderId, item, isFolder);
    setExplorerTree(updatedTree);
  };

  return (
    <div>
      <File explorer={explorerTree} handleInsertNode={handleInsertNode} />
    </div>
  );
};

export default Explorer;
