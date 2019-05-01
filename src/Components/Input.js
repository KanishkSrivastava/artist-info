import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = { artistName: '' };
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
          margin='dense'
        />
        <Button variant='contained' color='primary'>
          Search
        </Button>
      </div>
    );
  }
}
export default Input;
