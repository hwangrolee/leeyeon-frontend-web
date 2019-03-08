import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './Pagination.scss';
import { NextButton, PrevButton, PageNumber } from './';

const cx = classNames.bind(styles);

export default class Pagination extends Component {
    maxItemCount = 10;
    state = {
        currentPageNumber: 0,
        totalPage: 0,
        isPrevious: false,
        isNext: false,
        start: 0,
        end: 9
    }

    _handleNext = (e) => {

    }

    _createPageNumber = () => {
        const { start, end, currentPageNumber } = this.state;
        const pageNumbers = [];
        for(let i = start; i <= end; i++) {
            const active = currentPageNumber === i;
            pageNumbers.push(
                <li><Link key={i} className={cx('pagination-number', `${active ? 'active': ''}`)} to={`/?page=${i}`}>{i}</Link></li>
            )
        }

        return pageNumbers;
    }

    componentDidMount () {

    }


    render () {
        const { isNext, isPrevious, start, end,  totalPage, currentPageNumber } = this.state;
        const previousNumber = (start > 0 ? (start - 1) : start);
        const nextNumber = (totalPage >= end ? end + 1 : end);
        return (
            <div className={cx('pagination-wrap')}>
                <Link 
                    key={previousNumber}
                    className={cx('pagination-previous-button', `${!isPrevious ? 'disabled' : ''}`)}
                    to={`/?page=${previousNumber}`}
                >Previous</Link>
                <ul className={cx('pagination-number-wrap')}>
                    { this._createPageNumber() }
                </ul>
                <Link 
                    key={nextNumber}
                    className={cx('pagination-next-button', `${!isNext}` ? 'disabled' : '')}
                    to={`/?page=${nextNumber}`}
                >Next</Link>
            </div>
        )
    }
}