import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import Signup from 'components/Signup';
import Login from 'components/Login';
import styles from './Manu.scss';
import classNames from 'classnames';

const cx = classNames.bind(styles);

export default class Manu extends Component {
    render ()  {

        const manuList = [{
            text: '매물 등록',
            to: '/realEstate/add'
        }, {
            text: '매물 보기',
            to: '/realEstate'
        }, {
            text: '내정보',
            to: '/account'
        }]
        return (
            <ul className={cx('manu-container')}>
                <li>
                    <Link to="/">Logo</Link>
                </li>

                <li><Link to="/real-estate">매물보기</Link></li>
                <li><Link to="/real-estate/add">매물등록</Link></li>
                <li><Link to="/account">내 정보</Link></li>

            
                <li className={cx('right')}>
                    <Link className={cx('right')} to="/signup">회원가입</Link>
                </li>
                <li className={cx('right')}>
                    <Link className={cx('right')} to="/login">로그인</Link>
                </li>
                
                {/* <div className={cx('manu-left')}>
                    <div className={cx('logo')}>
                        Logo
                    </div>
                </div>
                <div className={cx('manu-left')}> 
                    <div className={cx('manu-group')}>
                        {
                            manuList.map(manu => <Link className={cx('link')} to={manu.to}>{manu.text}</Link>)
                        }
                    </div>
                </div>
                <div className={cx('manu-right')}>
                    <div className={cx('manu-group')}>
                        <Link className={cx('link-small')} to="#login">로그인</Link>
                        <span>&emsp;|&emsp;</span>
                        <Link className={cx('link-small')} to="#signup">회원가입</Link>
                    </div>
                </div> */}
                {/* <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">로그인</Link></li>
                    <li><Link to="/signup">회원가입</Link></li>
                    <li><Link to="/logout">로그아웃</Link></li>
                    <li><Link to="/real-estate">부동산</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul> */}
                {/* <hr/> */}
            </ul>
        )
    }
}