import React, { Component } from 'react';
import { useDragAndDrop } from 'contexts/DragAndDrop';
import classNames from 'classnames';
import styles from './Preview.scss';
const cx = classNames.bind(styles);

const Preview = ({file, loaded}) => {
    return (
        <div>
        {
            loaded ? (
                <img src={URL.createObjectURL(file)}/>
            ) : (
                <p>Not Found</p>
            )

        }
        </div>
    )
}

export default useDragAndDrop(Preview);