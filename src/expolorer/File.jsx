import React, { useState } from "react";

const File = ({ explorer, handleInsertNode }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [addDirectory, setAddDirectory] = useState(null);
  const [isAdding, setIsAdding] = useState({
    visible: false,
    isFolder: null,
  });

  //   const handleAddFileOrFolderSubmit = (e) => {
  //     explorer?.items?.unshift(addDirectory);
  //     setAddDirectory(null);
  //     setIsAdding(false);
  //   };

  const addClickHandler = (isFolder) => {
    setIsExpand(true);
    setAddDirectory({
      ...explorer,
      isFolder,
      id: Number(explorer?.id + 1),
    });
    setIsAdding({ visible: true, isFolder });
  };

  const handleInput = (e, isFolder) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(e.target.value, explorer.id, isFolder);
      setIsAdding({ visible: false });
    }
  };

  if (explorer?.isFolder) {
    return (
      <div
        style={{ background: "#ccc", width: "fit-content", margin: "5px 0" }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          <span
            onClick={() => setIsExpand((prev) => !prev)}
            style={{ cursor: "pointer" }}
          >
            📁{explorer?.name}
          </span>
          <div>
            <button onClick={() => addClickHandler(true)}>Folder +</button>
            <button onClick={() => addClickHandler(false)}>File +</button>
          </div>
        </div>
        <div
          style={{ display: isExpand ? "block" : "none", paddingLeft: "25px" }}
        >
          {isAdding.visible ? (
            <>
              <span>{isAdding?.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={(e) => handleInput(e, isAdding?.isFolder)}
                autoFocus
              />
            </>
          ) : null}
          {isExpand &&
            explorer?.items?.map((item) => {
              return (
                <File explorer={item} handleInsertNode={handleInsertNode} />
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>📄{explorer?.name}</span>
      </div>
    );
  }
};

export default File;
