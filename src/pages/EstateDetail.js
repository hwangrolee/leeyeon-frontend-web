import React, { Component } from "react";
import {
  Grid,
  Table,
  TableBody,
  TableRow,
  TableCell,
  Typography
} from "@material-ui/core";
import ImageGallery from "react-image-gallery";
import { Estate as EstateAPI } from '../api';
import EstateModel from '../lib/models/EstateModel';
import "react-image-gallery/styles/scss/image-gallery.scss";
import "react-image-gallery/styles/scss/image-gallery-no-icon.scss";
import styles from "../styles/_utils.scss";
import classNames from "classnames";
const cx = classNames.bind(styles);
export default class EstateDetail extends Component {
  state = {
    isOpen: true,
    editing: false,
    imageLinks: [
      {
        src:
          "https://images.pexels.com/photos/458766/pexels-photo-458766.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "altText3",
        caption: "test image 3",
        header: "1"
      },
      {
        src:
          "https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        altText: "altText1",
        caption: "test image 1",
        header: "123"
      }
    ],
    detail: {
      id: 0,
      author: "test",
      fee: 10,
      price: 123456789,
      liked: false,
      imageLink:
        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
      toggle: false,
      featured: true,
      content: "asfdsdfasdfasdfad",
      productType: "sale",
      residenceType: "다가구주택",
      mobileNumber: "010-1234-1234",
      address: "서울특별시 강남구 연남동",
      createdAt: "2019-03-15 13:50:30",
      imageList: [
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
          thumbnail: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        }
      ]
    }
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    const { estateId } = this.props.match.params;
    EstateAPI.findOneById(estateId).then(response => {
      const estate = response.data.data;
      this.setState({
        detail: new EstateModel(estate).toDetail()
      })
    })
  }

  onClose = data => {
    this.setState({
      isOpen: false
    });
  };

  onClickPrev = data => {
    console.log("onClickPrev", data);
  };
  onClickNext = data => {
    console.log("onClickNext", data);
  };

  getTitle({ price, type }) {
    let typeKOR = "매매";
    switch (type) {
      case "sale":
        typeKOR = "매매";
        break;
      case "rent":
        typeKOR = "전세";
        break;
      case "monthly":
        typeKOR = "월세";
        break;
      default:
        break;
    }
    let priceKOR = [];
    if (price > 100000000) {
      let hundredBillion = parseInt(price / 100000000); // 억
      if (hundredBillion > 0) priceKOR.push(`${hundredBillion}억`);
      price = price % 100000000;
    }

    if (price > 10000) {
      let tenThousand = parseInt(price / 10000); // 만
      if (tenThousand > 0) priceKOR.push(`${tenThousand}만원`);
      price = price % 10000;
    } else {
      priceKOR.push(`${price}원`);
    }

    return (
      <span style={{ fontWeight: 800, fontSize: "30px" }}>
        {typeKOR}&nbsp;{priceKOR.join(" ")}
      </span>
    );
  }

  render() {
    const { detail } = this.state;
    console.log(this.state.detail);
    return (
        <Grid container spacing={24}>
          <Grid item md={12}>
            <Grid container spacing={16}>
              <Grid item md={12} sm={12}>
                <Typography>
              {this.getTitle({
                price: detail.price,
                type: detail.productType
              })}
                </Typography>
              </Grid>
              <Grid item md={12} sm={12}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell fontSize="20" variant="head" component="th" scope="row">등록일</TableCell>
                      <TableCell variant="body">{detail.korDate}</TableCell>
                      <TableCell variant="head" component="th" scope="row">등록자</TableCell>
                      <TableCell variant="body">{detail.email}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head" component="th" scope="row">주소</TableCell>
                      <TableCell variant="body">{detail.address}</TableCell>
                      <TableCell variant="head" component="th" scope="row">연락처</TableCell>
                      <TableCell variant="body">{detail.email}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </Grid>
              <Grid item md={12} sm={12} align="center">
                <ImageGallery
                  additionalClass={cx("image-gallery")}
                  thumbnailPosition="right"
                  // slideInterval={5000}
                  disableArrowKeys={false}
                  disableThumbnailScroll={false}
                  autoPlay={false}
                  // showIndex={false}
                  showBullets={true}
                  // isRTL={true}
                  showPlayButton={true}
                  // useTranslate3D={true}
                  showFullscreenButton={false}
                  useBrowserFullscreen={false}
                  showNav={true}
                  showThumbnails={true}
                  startIndex={0}
                  items={ 
                    this.state.detail.imageList.map(image => {
                      return { original: image.imageLink, thumbnail: image.thumbnail }
                    })
                  }
                />
              </Grid>
              <Grid item md={12} sm={12}>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    );
  }
}
