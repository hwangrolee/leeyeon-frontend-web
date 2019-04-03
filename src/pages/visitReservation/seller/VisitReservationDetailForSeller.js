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
import styles from './VisitReservationDetailForSeller.scss';
const cx = classNames.bind(styles);

/**
 * @author leehwangro
 * @version 1.0.0
 * @class
 * @classdesc 판매자용 방문예약 상세 페이지
 */
class VisitReservationDetailForSeller extends Component {

    state = {
        openDialog: false,
        dialogMode: '',
        rejecting: false,
        accepting: false,
        estateInfo: {}
    }

    componentDidMount() {
        // TODO: 판매자용 방문예약상세정보를 서버에 요청한다.
    }

    handleRejectReservation = async () => {
        await this.setState({ rejecting: true });
        // TODO: 방문예약을 거절하는 Rest API를 호출합니다.
        this.props.enqueueSnackbar('방문예약을 거절했습니다.', { variant: 'success' });
        this.props.enqueueSnackbar('방문예약을 거절하지 못했습니다.', { variant: 'error' });
        await this.setState({ rejecting: false });
        this.handleCloseDialog('reject');
    }

    handleAcceptReservation = async () => {
        await this.setState({ accepting: true });
        // TODO: 방문예약을 수락하는 Rest API를 호출합니다.
        this.props.enqueueSnackbar('방문예약을 수락했습니다.', { variant: 'success' });
        this.props.enqueueSnackbar('방문예약을 수락하지 못했습니다.', { variant: 'error' });
        await this.setState({ accepting: false });
        this.handleCloseDialog('accept');
    }

    handleOpenDialog = (mode = "accept") => {
        this.setState({
            dialogMode: mode,
            openDialog: true,
            
        });
    }

    handleCloseDialog = (mode = "accept") => {
        this.setState({
            dialogMode: mode,
            openDialog: false,
           
        });
    }

    render () {
        return(
            <React.Fragment>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Typography variant="h5">방문예약 상세<Typography variant="caption" inline={true}>판매자용</Typography></Typography>
                    </Grid>
                    <Grid item xs={12} align="right">
                        <Button className={cx('button')} variant="outlined" size="medium" color="primary" onClick={() => this.handleOpenDialog('accept')}>수락</Button>
                        <Button className={cx('button')} variant="outlined" size="medium" color="secondary" onClick={() => this.handleOpenDialog('reject')}>거절</Button>
                    </Grid>
                </Grid>
                <Dialog open={this.state.openDialog} onClose={this.handleCloseDialog}>
                    <DialogTitle>
                        방문예약을 
                            { this.state.dialogMode === 'accept' ? ' 수락' : ''}
                            { this.state.dialogMode === 'reject' ? ' 거절' : ''}
                        하시겠습니까?
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>사용자가 요청한 방문예약일은 <strong>2019년 4월 20일 19시 30분</strong> 입니다.</DialogContentText>
                    </DialogContent>
                    <DialogActions align="right">
                        <Button variant="outlined" color="default" onClick={this.handleCloseDialog}>취소</Button>
                        { 
                            this.state.dialogMode === 'accept' ? (
                                <Button disabled={this.state.accepting} variant="outlined" color="primary" onClick={this.handleAcceptReservation}>수락</Button>
                            ) : ''
                        }
                        { 
                            this.state.dialogMode === 'reject' ? (
                                <Button disabled={this.state.rejecting} variant="outlined" color="secondary" onClick={this.handleRejectReservation}>거절</Button>
                            ) : ''
                        }
                    </DialogActions>
                </Dialog>
            </React.Fragment>
        )
    }
}
export default withSnackbar(VisitReservationDetailForSeller);