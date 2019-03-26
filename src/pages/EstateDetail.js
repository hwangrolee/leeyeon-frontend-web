import React, { Component } from "react";
import {
  TextField,
  Grid,
  GridList,
  GridListTile,
  Table,
  TableBody,
  TableRow,
  TableCell,
  TableHead,
  TableFooter
} from "@material-ui/core";
import { Add } from "@material-ui/icons";
import Lightbox from "react-images";
import ImageGallery from "react-image-gallery";
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
      thumbnails: [
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
        },
        {
          imageLink:
            "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
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
    // TODO: 상세 api 호출
    // const { realEstateId } = this.props.match.params;
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
      <div style={{ fontWeight: 800, fontSize: "30px" }}>
        {typeKOR}&nbsp;{priceKOR.join(" ")}
      </div>
    );
  }

  render() {
    const { imageLinks, editing, detail } = this.state;
    const { thumbnails, imageLink } = detail;
    const cols = [2, 1, 1, 1, 2, 1];
    let images = [{ src: imageLink }].concat(
      thumbnails.map(thumbnail => {
        return { src: thumbnail.imageLink };
      })
    );
    const simplyThumbnails = thumbnails.slice(0, 6);

    return (
      <div>
        <Grid container spacing={24}>
          <Grid item md={12}>
            <Grid container spacing={16}>
              <Grid item md={12} sm={12}>
                {/* <div align="center"> */}
                {this.getTitle({
                  price: detail.price,
                  type: detail.productType
                })}
                {/* </div> */}
              </Grid>
              <Grid item md={12} sm={12}>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell
                        fontSize="20"
                        variant="head"
                        component="th"
                        scope="row"
                      >
                        등록일
                      </TableCell>
                      <TableCell variant="body">{detail.createdAt}</TableCell>
                      <TableCell variant="head" component="th" scope="row">
                        등록자
                      </TableCell>
                      <TableCell variant="body">{detail.author}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell variant="head" component="th" scope="row">
                        주소
                      </TableCell>
                      <TableCell variant="body">{detail.address}</TableCell>
                      <TableCell variant="head" component="th" scope="row">
                        연락처
                      </TableCell>
                      <TableCell variant="body">
                        {detail.mobileNumber}
                      </TableCell>
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
                  items={[
                    {
                      original:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg",
                      thumbnail:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg"
                    },
                    {
                      original:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
                      thumbnail:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
                    },
                    {
                      original:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg",
                      thumbnail:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg"
                    },
                    {
                      original:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
                      thumbnail:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
                    },
                    {
                      original:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg",
                      thumbnail:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg"
                    },
                    {
                      original:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
                      thumbnail:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
                    },
                    {
                      original:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg",
                      thumbnail:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg"
                    },
                    {
                      original:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
                      thumbnail:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
                    },
                    {
                      original:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg",
                      thumbnail:
                        "https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/15/2016/08/22074603/luxury-room-sofitel-the-palm-dubai-1200x675.jpg"
                    },
                    {
                      original:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
                      thumbnail:
                        "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg"
                    }
                  ]}
                />
              </Grid>
              <Grid item md={12} sm={12}>
                상세정보
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}
