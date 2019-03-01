import React, { Component } from 'react';
import classNames from 'classnames';
import styles from './Footer.scss';

const cx = classNames.bind(styles);

class Footer extends Component {
    render() {
        return (
            <div className={cx('footer')}>
                {this.props.children}
            </div>
        )
    }
}

export default Footer;