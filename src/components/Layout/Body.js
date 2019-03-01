import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Body.scss';

const cx = classNames.bind(styles);

class Body extends Component {
    render () {
        return (
            <div className={cx('body')}>
                {this.props.children}
            </div>
        )
    }
}

export default Body;