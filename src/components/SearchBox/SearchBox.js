import React from "react";
import axios from 'axios';
import { Search as SearchIcon } from "@material-ui/icons";
import {
  Grid,
  IconButton,
  FormControl,
  InputLabel,
  Input
} from "@material-ui/core";

export default class SearchBox extends React.Component {
  state = {
    q: ""
  };

  handleChange = e => {
    const [name, value] = this.setState;
    this.setState({
      [name]: value
    });
  };

  handleSearch = e => {
    const { q } = this.state;
    const request = {
        data: {
            q: q
        }
    }
    /*
    axios.get('/').then(response => {
        this.props.onSearch(response);
    }).catch(error => {
        this.props.onError(error);
    })*/
  }

  render() {
    return (
      <Grid
        container
        spacing={16}
        alignItems="flex-end"
        style={{ marginBottom: "20px" }}
      >
        <Grid item>
          <IconButton>
            <SearchIcon onClick={this.handleSearch}/>
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
              name="q"
              value={this.state.q}
              onChange={this.handleChange}
            />
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}
