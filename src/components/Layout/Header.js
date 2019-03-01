import React, { Component } from 'react';
import styles from './Header.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

class Header extends Component {

    render () {
        return (
            <div className={cx('header')}>
                {this.props.children}
            </div>
        )
    }
}

export default Header;