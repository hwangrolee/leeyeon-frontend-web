import React, { Component } from "react";
import { Link } from 'react-router-dom';
import {
    Grid,
    Typography
} from '@material-ui/core';
import {  VisitReservationForBuyer as VisitReservationForBuyerAPI, VisitReservationForSeller as VisitReservationForSellerAPI } from '../../../api/VisitReservation';
import { withSnackbar } from 'notistack';
import TemplateForVisitReservationSeller from '../../../components/Estate/Template/TemplateForVisitReservationSeller';
import { EstateSummary } from '../../../components/Estate';
import Pagination from 'rc-pagination';
import classNames from 'classnames';
import styles from './VisitReservationListForSeller.scss';
const cx = classNames.bind(styles);

class VisitReservationListForSeller extends Component {

    state = {
        pagination: {
            curPage: 5,
            totPage: 59
        },
        estateList: [
        ]
    }

    componentDidMount() {
        // TODO: 구매자용 방문예약 목록을 서버에 요청한다.
    }

    handlePageChange(page) {
        const pagination = Object.assign(this.state.pagination, {});
        pagination.curPage = page;

        // TODO: 구매자용 방문예약 목록 페이징 처리.
        this.setState({
            pagination: pagination
        })
    }

    render () {
        return(
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5">판매자 전용 - 방문예약 목록</Typography>
                    </Grid>
                    {
                        this.state.estateList.length > 0 ? (
                            <Grid container spacing={24}>
                                {
                                    this.state.estateList.map((estateInfo, index) => {
                                        return (
                                            <Grid item xs={12} key={index}>

                                            </Grid>
                                        )
                                    })
                                }
                                <Grid item xs={12}>
                                    <Pagination total={this.state.pagination.totPage} current={this.state.pagination.curPage} onChange={this.handlePageChange}/>
                                </Grid>
                            </Grid>
                        ) : (
                            <React.Fragment>
                                <Grid container spacing={24}>
                                    <Grid item xs={12} key={0}>
                                        <TemplateForVisitReservationSeller estateInfo={{estateId: 0, status: 0}}/>
                                    </Grid>
                                    <Grid item xs={12} key={1}>
                                        <TemplateForVisitReservationSeller estateInfo={{estateId: 1, status: 1}}/>
                                    </Grid>
                                    <Grid item xs={12} key={2}>
                                        <TemplateForVisitReservationSeller estateInfo={{estateId: 2, status: 2}}/>
                                    </Grid>
                                </Grid>
                                
                                <Typography>
                                    방문예약 접수건이 없습니다.
                                </Typography>
                            </React.Fragment>
                        )
                    }
                </Grid>
            </React.Fragment>
        )
    }
}

export default withSnackbar(VisitReservationListForSeller);