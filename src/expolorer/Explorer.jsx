import React from "react";
import explorer from "../static/folderData";
import File from "./File";

const Explorer = () => {
  return (
    <div>
      <File explorer={explorer} />
    </div>
  );
};

export default Explorer;
