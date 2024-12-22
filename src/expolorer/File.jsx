import React, { useState } from "react";

const File = ({
  explorer,
  handleInsertNode,
  handleDeleteNode,
  handleUpdateNode,
}) => {
  const [isExpand, setIsExpand] = useState(false);
  const [isAdding, setIsAdding] = useState({
    visible: false,
    isFolder: null,
    isEdit: false,
  });

  const addClickHandler = (isFolder) => {
    setIsExpand(true);
    setIsAdding({ visible: true, isFolder, isEdit: false });
  };

  const handleInput = (e, isFolder) => {
    if (e.keyCode === 13 && e.target.value) {
      if (!isAdding?.isEdit) {
        handleInsertNode(e.target.value, explorer.id, isFolder);
      } else {
        // update call
        const updatedNodeObj = {
          ...explorer,
          name: e.target.value,
        };
        handleUpdateNode(updatedNodeObj, explorer.id);
      }
      setIsAdding({ visible: false });
    }
  };

  const deleteHandler = () => {
    handleDeleteNode(explorer.id);
  };

  const blurHandler = () => {
    setIsAdding((prev) => ({ ...prev, visible: false }));
  };

  console.log("ccccccccccccccc", isAdding.visible);

  if (explorer?.isFolder) {
    return (
      <div
        style={{ background: "#ccc", width: "fit-content", margin: "5px 0" }}
      >
        <div style={{ display: "flex", gap: "10px" }}>
          {isAdding.visible && isAdding?.isEdit ? (
            <>
              <span>{isAdding?.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={(e) => handleInput(e, isAdding?.isFolder)}
                autoFocus
                onBlur={blurHandler}
              />
            </>
          ) : (
            <>
              <span
                onClick={() => setIsExpand((prev) => !prev)}
                style={{ cursor: "pointer" }}
              >
                📁{explorer?.name}
              </span>
              <div>
                <button onClick={deleteHandler}>Del -</button>
                <button
                  onClick={() =>
                    setIsAdding({ visible: true, isFolder: true, isEdit: true })
                  }
                >
                  Edit
                </button>
                <button onClick={() => addClickHandler(true)}>Folder +</button>
                <button onClick={() => addClickHandler(false)}>File +</button>
              </div>
            </>
          )}
        </div>
        <div
          style={{ display: isExpand ? "block" : "none", paddingLeft: "25px" }}
        >
          {isAdding.visible && !isAdding.isEdit ? (
            <>
              <span>{isAdding?.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={(e) => handleInput(e, isAdding?.isFolder)}
                autoFocus
                onBlur={blurHandler}
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
                  handleUpdateNode={handleUpdateNode}
                />
              );
            })}
        </div>
      </div>
    );
  } else {
    return (
      <>
        {isAdding.visible && isAdding?.isEdit ? (
          <>
            <span>{isAdding?.isFolder ? "📁" : "📄"}</span>
            <input
              type="text"
              onKeyDown={(e) => handleInput(e, isAdding?.isFolder)}
              autoFocus
              onBlur={blurHandler}
            />
          </>
        ) : (
          <div>
            <span>
              📄{explorer?.name}
              <button
                onClick={() =>
                  setIsAdding({ visible: true, isFolder: false, isEdit: true })
                }
              >
                Edit
              </button>
              <button onClick={deleteHandler}>Del -</button>
            </span>
          </div>
        )}
      </>
    );
  }
};

export default File;
