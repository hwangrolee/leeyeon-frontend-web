import React, { Component } from "react";
import { Grid, Typography, Button, Chip } from "@material-ui/core";
import { Done, CalendarToday } from "@material-ui/icons";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DateTimePicker } from "material-ui-pickers";
import { withSnackbar } from 'notistack';
import { PaneltyRegisterModal } from "../Panelty";
import classNames from "classnames";
import styles from "./EstateSummary.scss";
const cx = classNames.bind(styles);

class EstateSummary extends Component {
  pickerRef = null;
  state = {
    estateInfo: {
      id: 10,
      fee: 0,
      imageLink: "",
      liked: false,
      address: {
        country: "",
        city: "",
        detail: "",
        zipCode: ""
      },
      type: "",
      readDate: "",
      roomCount: 0,
      keywords: [],
      price: 0,
      reservationDate: new Date()
    },
    viewType: 0, // 0: 기본정보만, 1: 기본정보 + 페널티 + 방문요청, 2: 기본정보 + 페널티 + 방문확정
    showPaneltyRegisterModal: false // required
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const now = new Date();

    const { estateInfo = {}, type = "default" } = nextProps;

    const {
      fee = 0,
      imageLink = "https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547",
      liked = false,
      price = 0,
      address = "대한민국",
      readDate = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join(
        "."
      )
    } = estateInfo;

    let viewType = 0;
    switch (type) {
      case "default":
        viewType = 0;
        break;
      case "type1":
        viewType = 1;
        break;
      case "type2":
        viewType = 2;
        break;
      case "type3":
        viewType = 3;
        break;
      default:
        viewType = 0;
        break;
    }

    return {
      estateInfo: {
        fee: fee,
        imageLink: imageLink,
        liked: liked,
        price: price,
        readDate: readDate,
        reservationDate: new Date()
      },
      viewType: viewType
    };
  }

  openWallet = e => {
    console.log("open wallet");
  };

  handleOpenNewWindow = e => {
    window.open("/estate/detail/" + this.state.id);
  };

  handleOpenPaneltyRegisterModal = e => {
    if (e !== undefined) {
      e.stopPropagation();
    }

    this.setState({ showPaneltyRegisterModal: true });
  };

  handleClosePaneltyRegisterModal = e => {
    if (e !== undefined) {
      e.stopPropagation();
    }
    this.setState({ showPaneltyRegisterModal: false });
  };

  handleSubmitPaneltyRegisterModal = e => {
    // TODO: 패널티를 부과하는 API호출
    this.props.enqueueSnackbar('패널티를 부과했습니다.', { variant: 'success' });
    this.props.enqueueSnackbar('패널티를 부과하지 못했습니다.', { variant: 'error' });
    this.handleClosePaneltyRegisterModal();
  }

  handleDeleteChip = e => {
    if (e) {
      e.stopPropagation();
    }
    if (window.confirm("방문예약을 취소하시겠습니까?")) {
      // TODO: 방문 예약 취소 요청
      this.props.enqueueSnackbar('방문예약을 취소했습니다.', { variant: 'success' });
      this.props.enqueueSnackbar('방문예약을 취소하지 못했습니다.', { variant: 'error' });
    } else {
    }
  };

  handleShowCalendar = e => {
    if (e !== undefined) {
      e.stopPropagation();
    }

    this.pickerRef.open(e);
  };

  handleChangeCalendar = date => {
    // TODO: 예약날짜 변경 요청 후 성공하면 reservationDate 값 변경
    console.log("handleChangeCalendar");
  };

  render() {
    return (
      <React.Fragment>
        <Grid className={cx("container")} onClick={this.handleOpenNewWindow}>
          <Grid item xs={3} className={cx("title")}>
            <img src={this.state.estateInfo.imageLink} />
          </Grid>
          <Grid item xs={9} className={cx("content")}>
            <Grid className={cx("content-header")}>
              <Typography variant="caption" style={{flex: 1}}>
                조회 날짜: {this.state.estateInfo.readDate}
              </Typography>
              {this.state.viewType === 1 ? (
                <Chip
                  icon={<CalendarToday />}
                  value={this.state.estateInfo.reservationDate}
                  onChange={this.handleChangeCalendar}
                  onClick={this.handleShowCalendar}
                  onDelete={this.handleDeleteChip}
                  label={`방문요청 (${this.state.estateInfo.reservationDate})`}
                  color="primary"
                  variant="outlined"
                  className={cx("content-align-right")}
                />
              ) : (
                ''
              )}
              {this.state.viewType === 2 ? (
                <Chip
                  icon={<CalendarToday />}
                  onClick={e => e.stopPropagation()}
                  deleteIcon={<Done />}
                  onDelete={this.handleShowCalendar}
                  label={`방문확정 (${this.state.estateInfo.reservationDate})`}
                  color="secondary"
                  variant="outlined"
                  className={cx("content-align-right")}
                />
              ) : (
                ''
              )}
              {this.state.viewType === 3 ? (
                <Button
                  color="secondary"
                  size="small"
                  variant="outlined"
                  className={cx("content-align-right")}
                  onClick={this.handleOpenPaneltyRegisterModal}
                >
                  패널티부과
                </Button>
              ) : (
                ''
              )}
            </Grid>
            <Grid className={cx("content-body")}>
              <Typography variant="h4">
                {this.state.estateInfo.price}원
              </Typography>{" "}
              &emsp;
              <Typography
                variant="caption"
                className={cx("content-align-bottom")}
              >
                수수료 {this.state.estateInfo.fee} ETH
              </Typography>
            </Grid>
            <Typography variant="body1">
              {/* {this.state.estateInfo.address.country}  */}
              강남구 연남동
            </Typography>
            <Typography variant="caption">
              간단설명 : 다세대 주택, 방 2, 화장실 1
            </Typography>
          </Grid>
        </Grid>
        <PaneltyRegisterModal
          open={this.state.showPaneltyRegisterModal}
          onClose={this.handleClosePaneltyRegisterModal}
          onSubmit={this.handleSubmitPaneltyRegisterModal}
        />
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <DateTimePicker
            style={{ display: "none" }}
            value={this.state.estateInfo.reservationDate}
            onChange={this.handleChangeCalendar}
            label="DateTimePicker"
            ref={ref => (this.pickerRef = ref)}
            disablePast
            showTodayButton
          />
        </MuiPickersUtilsProvider>
      </React.Fragment>
    );
  }
}

export default withSnackbar(EstateSummary);