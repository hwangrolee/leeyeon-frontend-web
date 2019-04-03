import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  FormControl,
  InputLabel,
  Card,
  CardHeader,
  CardMedia,
  CardActions,
  IconButton,
  Input
} from "@material-ui/core";

import { Search as SearchIcon } from "@material-ui/icons";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  gridList: {
    width: "100%",
    height: 450,
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(0)"
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)"
  },
  icon: {
    color: "white"
  },
  picture: {
    width: "30%"
  }
});

class EstateListPage extends Component {
  state = {
    items: [
      {
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
        residenceType: "다가구주택"
      },
      {
        id: 1,
        author: "test",
        fee: 11,
        price: 12345678,
        liked: false,
        imageLink:
          "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
        toggle: false,
        content: "asfdsdfasdfasdfad",
        productType: "rent",
        residenceType: "다가구주택"
      },
      {
        id: 2,
        author: "test",
        fee: 12,
        price: 1234567,
        liked: false,
        imageLink:
          "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
        toggle: false,
        content: "asfdsdfasdfasdfad",
        productType: "monthly",
        residenceType: "다세대주택"
      },
      {
        id: 3,
        author: "test",
        fee: 10,
        price: 123456,
        liked: false,
        imageLink:
          "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
        toggle: false,
        featured: true,
        content: "asfdsdfasdfasdfad",
        productType: "monthly",
        residenceType: "다세대주택"
      },
      {
        id: 4,
        author: "test",
        fee: 11,
        price: 12345,
        liked: false,
        imageLink:
          "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
        toggle: false,
        content: "asfdsdfasdfasdfad",
        productType: "monthly",
        residenceType: "다세대주택"
      },
      {
        id: 5,
        author: "test",
        fee: 12,
        price: 1234,
        liked: false,
        imageLink:
          "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
        toggle: false,
        content: "asfdsdfasdfasdfad",
        address: {
          city: "서울특별시",
          gu: "관악구",
          dong: "신림동"
        },
        productType: "monthly",
        residenceType: "다세대주택"
      }
    ]
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
      if (tenThousand > 0) priceKOR.push(`${tenThousand}만`);
      price = price % 10000;
    } else {
      priceKOR.push(`${price}원`);
    }

    return (
      <div style={{ fontWeight: 800, fontSize: "20px" }}>
        {typeKOR}&nbsp;{priceKOR.join(" ")}
      </div>
    );
  }

  getSubTitle({ address, type }) {
    return <div>{type} / 면적, 주소, 층</div>;
  }

  render() {
    const { classes } = this.props;
    const { items } = this.state;
    return (
      <div>
        <Grid
          container
          spacing={16}
          alignItems="flex-end"
          style={{ marginBottom: "20px" }}
        >
          <Grid item>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel
                style={{ fontSize: "24px" }}
                variant="standard"
                htmlFor="adornment-password"
              >
                검색을 원하시나요?
              </InputLabel>
              <Input
                fullWidth
                style={{ fontSize: "24px" }}
                placeholder="검색은 여기서 하세요!"
              />
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={24}>
          {items.map(item => (
            <Grid
              item
              key={item.id}
              md={3}
              style={{ cursor: "pointer" }}
              onClick={() => {
                window.open("/estate/detail/" + item.id);
              }}
            >
              <Card>
                <CardHeader
                  title={this.getTitle({
                    price: item.price,
                    type: item.productType
                  })}
                  subheader={this.getSubTitle({
                    address: item.address,
                    type: item.residenceType
                  })}
                />
                <CardMedia
                  image={item.imageLink}
                  src={item.imageLink}
                  style={{ height: "145px" }}
                />
                <CardActions disableActionSpacing style={{ padding: 0 }}>
                  {/* <Button color="default" size="small" variant="outlined" fullWidth padding={0} style={{borderTopLeftRadius:0, borderTopRightRadius:0}}>자세히</Button> */}
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    );
  }
}

export default withStyles(styles)(EstateListPage);
