import React, { useState } from "react";

const File = ({ explorer, handleInsertNode, handleDeleteNode }) => {
  console.log("re-render");
  const [isExpand, setIsExpand] = useState(false);
  const [isAdding, setIsAdding] = useState({
    visible: false,
    isFolder: null,
  });

  const addClickHandler = (isFolder) => {
    setIsExpand(true);
    setIsAdding({ visible: true, isFolder });
  };

  const handleInput = (e, isFolder) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(e.target.value, explorer.id, isFolder);
      setIsAdding({ visible: false });
    }
  };

  const deleteHandler = () => {
    handleDeleteNode(explorer.id);
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
            <button onClick={deleteHandler}>Del -</button>
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
                <File
                  explorer={item}
                  handleInsertNode={handleInsertNode}
                  handleDeleteNode={handleDeleteNode}
                />
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <span>
          📄{explorer?.name}
          <button onClick={() => deleteHandler()}>Del -</button>
        </span>
      </div>
    );
  }
};

export default File;
