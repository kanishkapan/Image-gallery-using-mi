import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import Select from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Results from '../Results/Results'; // Corrected import for Results
import axios from 'axios';
// import ActionAccessible from 'material-ui/svg-icons/action/accessible';
class Search extends Component {
  state = {
    searchText: '',
    amount: 15,
    apiUrl: 'https://pixabay.com/api',
    apiKey: '44031783-2c1b07b4469e34c47cc4f2283',
    images: [],
  };

  onTextChange = (e) => {
    const val=e.target.value;
    this.setState({ [e.target.name]: val}, () => {
      if (val === '') {
        this.setState({ images: [] });
      } else {
        axios
          .get(
            `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&safesearch=true`
          )
          .then((res) => this.setState({ images: res.data.hits }))
          .catch((err) => console.log(err));
           
      }
    });
  };

  onAmountChange = (e, index, value) => this.setState({ amount: value });

  render() {
    console.log(this.state.images);
    return (




      
      <div>
        <TextField
          name="searchText"
          value={this.state.searchText}
          onChange={this.onTextChange}
          floatingLabelText="Search for images"
          fullWidth={true}
        />
        <br />
        {this.state.images.length > 0 ? (
          <Results images={this.state.images} />
        ) : null}
        <Select
          name="amount"
          floatingLabelText="Amount"
          value={this.state.amount}
          onChange={this.onAmountChange}
        >
          <MenuItem value={5} primaryText="5" />
          <MenuItem value={10} primaryText="10" />
          <MenuItem value={15} primaryText="15" />
          <MenuItem value={30} primaryText="30" />
          <MenuItem value={50} primaryText="50" />
        </Select>
      </div>
    );
  }
}

export default Search;
