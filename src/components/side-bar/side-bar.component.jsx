import React from 'react'; 
import { connect } from 'react-redux'

import './side-bar.styles.sass';

import { selectLoadingState } from '../../redux/data/data.selectors';

import WithSpinner from '../with-spinner/with-spinner.component';

import NumbersOverview from '../numbers-overview/numbers-overview.component';
import LocationsOverview from '../locations-overview/locations-overview.component';

const NumbersOverviewWithSpinner = WithSpinner(NumbersOverview)
const LocationsOverviewWithSpinner = WithSpinner(LocationsOverview)

const SideBar = ({ isLoading }) => {
  return (
    <div className="side-bar">
      <NumbersOverviewWithSpinner isLoading={isLoading} />
      <LocationsOverviewWithSpinner isLoading={isLoading} />
    </div>
)};

const mapStateToProps = state => ({
  isLoading: selectLoadingState(state)
})

export default connect(mapStateToProps)(SideBar);