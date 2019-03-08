import React from "react";
import DropZone from "react-dropzone";

export default class Terms extends React.Component {
  render() {
    return (
      <DropZone accept="image/*" onDrop={this.onDrop}>
        {({
          getRootProps,
          getInputProps,
          isDragActive,
          isDragAccept,
          isDragReject,
          acceptedFiles,
          rejectedFiles
        }) => {
          return (
            <div {...getRootProps()} style={{ height: "355px" }}>
              <input {...getInputProps()} />

              {this.state.image ? (
                <div
                  style={{
                    height: "350px",
                    textAlign: "center",
                    paddingTop: "4px",
                    paddingBottom: "3px"
                  }}
                >
                  <img
                    style={{ width: "auto", height: "100%" }}
                    src={URL.createObjectURL(this.state.image)}
                  />
                </div>
              ) : (
                <div style={{height:"340px"}}>
                  <div>
                  {isDragAccept ? "Drop" : "Drag"} files here...

                  </div>
                </div>
              )}
            </div>
          );
        }}
      </DropZone>
    );
  }
}
