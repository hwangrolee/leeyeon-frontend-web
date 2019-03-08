"use strict";
import React, { Component } from "react";
import styles from "./OCR.scss";
import classNames from "classnames";
import { Zone, Preview } from "components/DragAndDrop";
import { useDragAndDrop } from "contexts/DragAndDrop";

const cx = classNames.bind(styles);

class OCR extends Component {
  render() {
    const { file, loaded } = this.props;

    if (file !== null) {
      console.log(file);
    }

    return (
      <div>
        <Zone />
      </div>
    );
  }
}

export default useDragAndDrop(OCR);
