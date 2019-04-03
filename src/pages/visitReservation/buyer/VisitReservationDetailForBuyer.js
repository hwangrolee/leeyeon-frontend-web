import React, { Component } from "react";
import {
    Grid,
    Typography,
    Button,
    Dialog,
    DialogContent,
    DialogContentText,
    DialogActions,
    DialogTitle
} from '@material-ui/core';
import {  VisitReservationForBuyer as VisitReservationForBuyerAPI, VisitReservationForSeller as VisitReservationForSellerAPI } from '../../../api/VisitReservation';
import { withSnackbar } from 'notistack';
import classNames from 'classnames';
import styles from './VisitReservationDetailForBuyer.scss';
const cx = classNames.bind(styles);

/**
 * @author leehwnagro
 * @version 1.0.0
 * @class
 * @classdesc 구매자용 방문예약 상세 페이지
 */
class VisitReservationDetailForBuyer extends Component {
    state = {
        openDialog: false,
        estateInfo: {}
    }

    componentDidMount() {
        // TODO: 구매자용 방문예약 상세정보를 서버에 요청한다.
    }

    handleOpenDialog = () => {
        this.setState({
            openDialog: true
        });
        
    }

    handleCloseDialog = () => {
        this.setState({
            openDialog: false
        });
    }

    handleCancelReservation = () => {
        // TODO: 구매자용 방문예약 취소 요청을 서버에 보냅니다.
        this.props.enqueueSnackbar('방문예약을 취소했습니다.', { variant: 'success' });
        this.props.enqueueSnackbar('방문예약을 취소하지 못했습니다.', { variant: 'error' });
    }

    render () {
        return (
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5">방문예약 상세<Typography variant="caption" inline={true}>구매자용</Typography></Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button variant="outlined" size="small" color="secondary" align="right" onClick={this.handleOpenDialog}>방문예약 취소</Button>
                    </Grid>
                </Grid>
                <Dialog open={this.state.openDialog} onClose={this.handleCloseDialog}>
                    <DialogTitle>방문예약을 정말 취소하시겠습니까?</DialogTitle>
                    <DialogContent>
                    </DialogContent>
                    <DialogActions align="right">
                        <Button variant="outlined" color="default" onClick={this.handleCloseDialog}>방문예약 <strong>유지</strong></Button>
                        <Button variant="outlined" color="secondary" onClick={this.handleCancelReservation}>방문예약 <strong>취소</strong></Button>
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}

export default withSnackbar(VisitReservationDetailForBuyer);