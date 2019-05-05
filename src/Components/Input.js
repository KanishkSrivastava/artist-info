import React, { Component } from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { getArtistDetails, history } from '../Actions/artistSearchAction';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { artistName: '' };
    this.props.history();
  }
  render() {
    return (
      <div>
        <TextField
          required
          label='Artist Name'
          value={this.state.inputField}
          onChange={artistName => this.setState({ artistName: artistName.target.value })}
          variant='outlined'
          fullWidth
          margin='normal'
        />
        <Button onClick={() => this.props.getArtistDetails(this.state.artistName)} variant='contained' color='primary'>
          Search
        </Button>
      </div>
    );
  }
}

const mapDispatchToProps = { getArtistDetails, history };
export default connect(
  null,
  mapDispatchToProps
)(Input);
