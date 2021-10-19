import React from "react";
import "../../../assets/styles/scss/app.scss"
import Editor from "../../components/PixelDrawing/Editor";

function PixelDrawing() {
  return (
    <div className="App" style={{backgroundColor: "#222831"}}>
      <Editor />
    </div>
  );
}

export default PixelDrawing;
