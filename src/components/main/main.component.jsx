import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './main.styles.sass';

import { selectIsDataFetching } from '../../redux/data/data.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import MapComponent from '../map/map.component';
import SideBar from '../side-bar/side-bar.component';

const MapComponentWithSpinner = WithSpinner(MapComponent);

const Main = ({ isDataFetching }) => (
  <div className="main">
    <SideBar/>
    <MapComponentWithSpinner isLoading={isDataFetching}  />
  </div>
);

const mapStateToProps = createStructuredSelector({
  isDataFetching: selectIsDataFetching 
})

export default connect(mapStateToProps)(Main);