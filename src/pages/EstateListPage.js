import React, { Component } from "react";
import { Grid, FormControl, InputLabel, IconButton, Input } from "@material-ui/core";
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
    estateList: []
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
        const estateList = response.data.data.contlist.map(estate => {
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

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
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
