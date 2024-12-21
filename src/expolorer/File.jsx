import React, { useState } from "react";

const File = ({ explorer }) => {
  const [isExpand, setIsExpand] = useState(false);
  const [addDirectory, setAddDirectory] = useState(null);
  const [isAdding, setIsAdding] = useState({
    visible: false,
    isFolder: null,
  });

  const handleAddFileOrFolderSubmit = (e) => {
    explorer?.items?.unshift(addDirectory);
    setAddDirectory(null);
    setIsAdding(false);
  };

  const addClickHandler = (exp, isFolder) => {
    setIsExpand(true);
    setAddDirectory({
      ...exp,
      isFolder,
      id: Number(exp?.id + 1),
    });
    setIsAdding({ visible: true, isFolder });
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
            <button onClick={() => addClickHandler(explorer, true)}>
              Folder +
            </button>
            <button onClick={() => addClickHandler(explorer, false)}>
              File +
            </button>
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
                onChange={(e) => {
                  setAddDirectory((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }));
                }}
                autoFocus
                onClick={handleAddFileOrFolderSubmit}
                onBlur={handleAddFileOrFolderSubmit}
              />
            </>
          ) : null}
          {isExpand &&
            explorer?.items?.map((item) => {
              return <File explorer={item} />;
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
