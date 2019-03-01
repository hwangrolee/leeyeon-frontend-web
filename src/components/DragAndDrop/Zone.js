import React, { Component } from 'react';
import { useDragAndDrop } from 'contexts/DragAndDrop';
import Tesseract from 'tesseract.js';
import DropZone from 'react-dropzone';
import styles from './Zone.scss';

import classNames from 'classnames';

const cx = classNames.bind(styles);

class DragDropZone extends Component {

    state = {
      file: null,
      loaded: false
    }

    onDrop = (acceptedFiles, rejectedFiles) => {
      console.log('call');
      // Do something with files
      // console.log('acceptedFiles', acceptedFiles);
      const file = acceptedFiles[0]
      this.setState({
        file: file
      });
      this.props.setFile(file);

      const myImage = new Image(file);
      myImage.width = '500';
      myImage.height = '500';
      myImage.src = URL.createObjectURL(file);

      // console.log(myImage);
      // Tesseract.recognize(myImage)
      //  .progress(function  (p) { console.log('progress', p)    })
      //  .then(function (result) { console.log('result', result) })
      // this.props.setLoaded(true);
    }
    render() {
        const baseStyle = {
            width: 200,
            height: 200,
            borderWidth: 2,
            borderColor: '#666',
            borderStyle: 'dashed',
            borderRadius: 5
          };
          const activeStyle = {
            borderStyle: 'solid',
            borderColor: '#6c6',
            backgroundColor: '#eee'
          };
          const rejectStyle = {
            borderStyle: 'solid',
            borderColor: '#c66',
            backgroundColor: '#eee'
          };
        return (
          <div>
            {
              
              <DropZone accept="image/*" onDrop={this.onDrop}>
                {({ getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject, acceptedFiles, rejectedFiles }) => {
                  let styles = {...baseStyle}
                  styles = isDragActive ? {...styles, ...activeStyle} : styles
                  styles = isDragReject ? {...styles, ...rejectStyle} : styles

                  return (
                  <div
                  {...getRootProps()}
                  style={styles}
                  >
                  <input {...getInputProps()} />
                  <div>
                  {isDragAccept ? 'Drop' : 'Drag'} files here...
                  </div>
                  {isDragReject && <div>Unsupported file type...</div>}
                  {this.props.children}
                  </div>
                  )
                }}
              </DropZone>
            }

          </div>
            
        )
    }
}

export default useDragAndDrop(DragDropZone)