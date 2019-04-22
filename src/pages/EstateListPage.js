import React, { Component } from "react";
import {
  Grid,
  FormControl,
  InputLabel,
  IconButton,
  Input,
} from "@material-ui/core";
import { Estate as EstateAPI} from '../api';
import EstateModel from '../lib/models/EstateModel';
import { Search as SearchIcon } from "@material-ui/icons";
import Square from '../components/Estate/Template/Square';
import { getScrollPosition } from '../lib/Scroll';
import { withSnackbar } from 'notistack';

class EstateListPage extends Component {
  oldScroll = null;
  possibleScroll = true;
  state = {
    pagination: {
      curPage: 1,
      totPage: 100,
    },
    estateList: [
      // {
      //   estateId: 0,
      //   area: '서울시 강남구 근처',
      //   email: "test",
      //   price: 123456789,
      //   isLike: false,
      //   likeCount: 10,
      //   isNew: false,
      //   imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
      // },
      // {
      //   estateId: 1,
      //   area: '서울시 관악구 근처',
      //   email: "test",
      //   price: 12345678,
      //   isLike: true,
      //   likeCount: 13,
      //   isNew: true,
      //   imageLink:
      //     "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
      // },
      // {
      //   estateId: 2,
      //   area: '서울시 중구 근처',
      //   email: "test",
      //   price: 1234567,
      //   isLike: true,
      //   likeCount: 10,
      //   isNew: true,
      //   imageLink:
      //     "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
  
      // },
      // {
      //   estateId: 3,
      //   area: '서울시 양천구 근처',
      //   email: "test",
      //   price: 123456,
      //   isLike: false,
      //   likeCount: 10,
      //   isNew: false,
      //   imageLink:
      //     "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
      // },
      // {
      //   estateId: 4,
      //   area: '서울시 강동구 근처',
      //   email: 'test',
      //   price: 123456789,
      //   isLike: false,
      //   likeCount: 10,
      //   isNew: true,
      //   imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
      // },
      // {
      //   estateId: 5,
      //   area: '서울시 광진구 근처',
      //   email: 'email',
      //   price: 123456789,
      //   isLike: false,
      //   likeCount: 10,
      //   isNew: false,
      //   imageLink: "https://previews.123rf.com/images/hemul75/hemul751606/hemul75160600014/57656725-%ED%81%B4%EB%9E%98%EC%8B%9D-%EC%95%84%EC%9D%B4-%EB%B0%A9-%ED%99%94%EC%9D%B4%ED%8A%B8-%EC%83%89%EC%83%81%EC%9D%98-3d-%EB%A0%8C%EB%8D%94%EB%A7%81.jpg",
      // }
    ]
  };

  findAndSetEstate = () => {
    this.props.enqueueSnackbar('불러오는 중이에요...', { 
      variant: 'info',
      preventDuplicate: true,
      autoHideDuration: 1500,
      anchorOrigin: {
        vertical: 'bottom',
        horizontal: 'center',
      }
    });

    EstateAPI
      .findAll({ page: this.state.pagination.curPage })
      .then(response => {
        const estateList = response.data.contlist.map(estate => {
          return new EstateModel(estate).toSimple()
        });

        this.setState({
          estateList: this.state.estateList.concat(estateList.filter(value => value !== undefined))
        });
      });
  }

  componentDidMount () {
      this.findAndSetEstate();
      window.addEventListener('scroll', this.handleScroll);
  }

  handlePageChange = async (page) => {
    const pagination = Object.assign(this.state.pagination, {});
    pagination.curPage = page;
    await this.setState({
        pagination: pagination
    });

    this.findAndSetEstate();
  }

  handleSubmit = (e) => {
    return true;
  }

  handleScroll= e => {
    const curScroll = getScrollPosition();
    if(curScroll > 0.6 && curScroll > this.oldScroll && this.possibleScroll === true) {
      this.possibleScroll = false;
      setTimeout(() => {
        this.possibleScroll = true;
      }, 500);
      this.handlePageChange(this.state.pagination.curPage + 1);
    }

    this.oldScroll = curScroll;
  }

  render() {
    console.log(this.state.estateList);
    return (
      <div onScroll={this.handleScroll}>
  <form onSubmit={this.handleSubmit} >
        <Grid container spacing={16} alignItems="flex-end" style={{ marginBottom: "20px" }}>
          <Grid item>
            <IconButton>
              <SearchIcon />
            </IconButton>
          </Grid>
          <Grid item xs={8}>
            <FormControl fullWidth>
              <InputLabel style={{ fontSize: "24px" }} variant="standard" htmlFor="adornment-password">
                검색을 원하시나요?
              </InputLabel>
              <Input name="search" fullWidth style={{ fontSize: "24px" }} placeholder="검색은 여기서 하세요!"/>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container spacing={24} >
          {
            this.state.estateList.map(estateInfo => (
              <Grid key={estateInfo.estateId} item md={3}>
                <Square estateInfo={estateInfo}/>
              </Grid>
            ))
          }
        </Grid>
      </form>
      </div>
      
    );
  }
}

export default withSnackbar(EstateListPage);
