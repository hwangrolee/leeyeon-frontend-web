import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Textarea.scss';
const cx = classNames.bind(styles);

export default class Textarea extends Component {
    render () {
        return (
            <textarea className={cx('textarea')} {...this.props}>{this.props.children}</textarea>
        )
    }
}