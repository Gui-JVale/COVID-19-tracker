import React from 'react';
import { connect } from 'react-redux';

import './main.styles.sass';

import { selectLoadingState } from '../../redux/data/data.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import MapComponent from '../map/map.component';
import SideBar from '../side-bar/side-bar.component';

const MapComponentWithSpinner = WithSpinner(MapComponent);

const Main = ({ isLoading }) => (
  <div className="main">
    <SideBar/>
    <MapComponentWithSpinner isLoading={isLoading}  />
  </div>
);

const mapStateToProps = state => ({
  isLoading: selectLoadingState(state)
})

export default connect(mapStateToProps)(Main);