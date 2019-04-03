import React, { Component } from "react";
import Pagination from 'rc-pagination';
import { Link } from 'react-router-dom';
import {
    Grid,
    Typography
} from '@material-ui/core';
import {  VisitReservationForBuyer as VisitReservationForBuyerAPI, VisitReservationForSeller as VisitReservationForSellerAPI } from '../../../api/VisitReservation';
import { EstateSummary } from '../../../components/Estate';
import classNames from 'classnames';
import styles from './VisitReservationListForBuyer.scss';
const cx = classNames.bind(styles);

export default class VisitReservationListForBuyer extends Component {
    state = {
        pagination: {
            curPage: 5 ,
            totPage: 59,
        },
        estateList: []
    }

    componentDidMount() {
        // TODO: 판매자용 방문예약 목록을 서버에 요청한다.
        // VisitReservationForBuyerAPI.visitReservationList();
    }

    handlePageChange (page) {
        // TODO: 판매자용 방문예약 목록 페이징 처리.
        const pagination = Object.assign(this.state.pagination, {});
        pagination.curPage = page;
        
        this.setState({
            pagination: pagination
        })
    }

    render () {
        return(
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5">구매자 전용 - 방문예약 목록</Typography>
                        <Link style={{color: 'black'}}  target="_blank" to="/account/estate/buyer/visit-reservation/detail/0">상세페이지로 이동(샘플)</Link>
                    </Grid>
                    {
                        this.state.estateList.length > 0 ? (
                            <React.Fragment>
                                {
                                    this.state.estateList.map((estateInfo) => {
                                        return (
                                            <Grid item xs={12}>
                                        
                                            </Grid>
                                        );
                                    })
                                }
                                <Grid item xs={12}>
                                    <Pagination 
                                        total={this.state.pagination.totPage}
                                        current={this.state.pagination.curPage}
                                        onChange={this.handlePageChange}
                                    />
                                </Grid>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <Typography>
                                    방문예약한 이력이 존재하지 않습니다.
                                </Typography>
                            </React.Fragment>
                        )
                    }
                    
                </Grid>
                
            </React.Fragment>
        )
    }
}