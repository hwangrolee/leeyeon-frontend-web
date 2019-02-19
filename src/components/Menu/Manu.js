import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Manu extends Component {
    render ()  {
        return (
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/login">로그인</Link></li>
                    <li><Link to="/signup">회원가입</Link></li>
                    <li><Link to="/logout">로그아웃</Link></li>
                    <li><Link to="/real-estate">부동산</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
                <hr/>
            </div>
        )
    }
}