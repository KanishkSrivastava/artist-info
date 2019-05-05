import React from 'react';
import { connect } from 'react-redux';
import SyncLoader from 'react-spinners/SyncLoader';

const Loading = ({ artistInfo }) => (
  <div className='sweet-loading' style={{ paddingLeft: 10 }}>
    <SyncLoader sizeUnit={'px'} size={15} color={'#3f51b5'} loading={artistInfo.loading} />
  </div>
);

const mapStateToProps = ({ artistInfo }) => ({ artistInfo });
export default connect(mapStateToProps)(Loading);
