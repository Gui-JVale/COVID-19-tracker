import React from 'react'; 
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './side-bar.styles.sass';

import { selectIsDataFetching } from '../../redux/data/data.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import NumbersOverview from '../numbers-overview/numbers-overview.component';
import LocationsOverview from '../locations-overview/locations-overview.component';

const NumbersOverviewWithSpinner = WithSpinner(NumbersOverview)
const LocationsOverviewWithSpinner = WithSpinner(LocationsOverview)

const SideBar = ({ isDataFetching }) => {
  return (
    <div className="side-bar">
      <NumbersOverviewWithSpinner isLoading={isDataFetching} />
      <LocationsOverviewWithSpinner isLoading={isDataFetching} />
    </div>
)};

const mapStateToProps = createStructuredSelector({
  isDataFetching: selectIsDataFetching
})

export default connect(mapStateToProps)(SideBar);