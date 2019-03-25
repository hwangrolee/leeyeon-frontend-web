import React, { Component } from "react";
import { Grid, Typography, Button, Chip } from "@material-ui/core";
import { DoneOutline, Done, Delete, CalendarToday } from '@material-ui/icons';
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider, TimePicker, DatePicker, DateTimePicker } from 'material-ui-pickers';
import { PaneltyRegisterModal } from '../Panelty';
import classNames from "classnames";
import styles from "./RealEstateSummary.scss";
const cx = classNames.bind(styles);

export default class RealEstateSummary extends Component {
  state = {
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
    reservationDate: new Date(),
    showPaneltyRegisterModal: false, // required
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const now = new Date();
    const {
      fee = 0,
      imageLink = "https://dubsism.files.wordpress.com/2017/12/image-not-found.png?w=547",
      liked = false,
      price = 0,
      address = "대한민국",
      readDate = [now.getFullYear(), now.getMonth() + 1, now.getDate()].join(
        "."
      )
    } = nextProps;

    return {
      fee: fee,
      imageLink: imageLink,
      liked: liked,
      price: price,
      readDate: readDate
    };
  }

  openWallet = e => {
    console.log("open wallet");
  };

  handleOpenNewWindow = e => {
    window.open("/real-estate/detail/" + this.state.id);
  };

  handleOpenPaneltyRegisterModal = e => {
    if(e !== undefined) {
      e.stopPropagation();
    }
    
    this.setState({ showPaneltyRegisterModal: true});
  }

  handleClosePaneltyRegisterModal = e => {
    if(e !== undefined) {
      e.stopPropagation();
    }
    this.setState({ showPaneltyRegisterModal: false });
  }

  handleDeleteChip = e => {
    if(window.confirm("방문예약을 취소하시겠습니까?")) {
      alert("방문예약을 취소했습니다.");
    } else {
    }
  }

  handleShowCalendar = e => {
  }

  handleChangeCalendar = e => {
    console.log(
      'handleChangeCalendar'
    )
  }

  render() {
    console.log(this.state);
    const open = Boolean(this.state.showPaneltyPopoverTarget);
    return (
      <div>
        <Grid className={cx("container")} onClick={this.handleOpenNewWindow}>
        <Grid item xs={3} className={cx("title")}>
          <img src={this.state.imageLink} />
        </Grid>
        <Grid item xs={9} className={cx("content")}>
          <Grid className={cx("content-header")}>
            <Typography variant="caption" style={{flex: 1}}>
              조회 날짜: {this.state.readDate}
            </Typography>
            <Chip
              icon={<CalendarToday/>}
              onClick={(e) => e.stopPropagation()}
              onDelete={this.handleDeleteChip}
              label="방문예정"
              color="primary"
              variant="outlined"
              className={cx("content-align-right")}
            />
             <Chip
              icon={<CalendarToday/>}
              onClick={(e) => e.stopPropagation()}
              deleteIcon={<Done/>}
              onDelete={this.handleShowCalendar}
              label="방문확정"
              color="secondary"
              variant="outlined"
              className={cx("content-align-right")}
            />
            <Button
              color="secondary"
              size="small"
              variant="outlined"
              className={cx("content-align-right")}
              onClick={this.handleOpenPaneltyRegisterModal}
            >
              패널티부과
            </Button>
            
          </Grid>
          <Grid className={cx("content-body")}>
            <Typography variant="h4">{this.state.price}원</Typography> &emsp;
            <Typography
              variant="caption"
              className={cx("content-align-bottom")}
            >
              수수료 {this.state.fee} ETH
            </Typography>
          </Grid>
          <Typography variant="body1">
            {this.state.address.country} 강남구 연남동
          </Typography>
          <Typography variant="caption">
            간단설명 : 다세대 주택, 방 2, 화장실 1
          </Typography>
        </Grid>
        
      </Grid>
      <PaneltyRegisterModal
          open={this.state.showPaneltyRegisterModal}
          onClose={this.handleClosePaneltyRegisterModal}
          
      />
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container  justify="space-around">
        <DateTimePicker
          label="Date time picker"
          value={this.state.reservationDate}
          TextFieldComponent={(props) => <Chip
            id={props.id}
            icon={<CalendarToday/>}
            value={props.value}
            onChange={this.handleChangeCalendar}
            onClick={(e) => { console.log(props); props.onClick(e)}}
            onDelete={this.handleDeleteChip}
            label="방문예정"
            color="primary"
            variant="outlined"
            className={cx("content-align-right")}
          />}
        />
          <DatePicker
            margin="normal"
            label="Date picker"
            
            // value={selectedDate}
            // onChange={this.handleDateChange}
          />
          <TimePicker
            margin="normal"
            label="Time picker"
            // value={selectedDate}
            // onChange={this.handleDateChange}
          />
        </Grid>
      </MuiPickersUtilsProvider>
      </div>
      
    );
  }
}
