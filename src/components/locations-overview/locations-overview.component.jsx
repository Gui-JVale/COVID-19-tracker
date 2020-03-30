import React from 'react';
import { connect } from 'react-redux';
 
import './locations-overview.styles.sass';

import { searchLocations } from '../../redux/data/data.actions'

import LocationList from '../locations-list/locations-list.component'; 
import SearchForm from '../search-form/search-form.component'

const LocationsOverview = ({searchLocations}) => {
  const handleChange = e => searchLocations(e.target.value);
  return (
  <div className="locations-overview u-margin-top-small">
    <h2 className="heading-secondary locations-overview__title u-margin-bottom-small">
      Cases by Country/City/Region
    </h2> 
    <SearchForm handleChange={handleChange}/>
    <LocationList />
  </div>
)};

const mapDispatchToProps = dispatch => ({
  searchLocations: input => dispatch(searchLocations(input)),
})

export default connect(null, mapDispatchToProps)(LocationsOverview);

