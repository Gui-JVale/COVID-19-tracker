import React from 'react';
import { connect } from 'react-redux';

import { selectSortedData } from '../../redux/data/data.selectors';

import LocationInfo from '../location-info/location-info.component';

import './locations-list.styles.sass';

const LocationsList = ({ sortedData }) => (
  <ul className="locations-list">
    {!sortedData || sortedData.length === 0 ? ( 
      <div className="locations-list__no-results">No Results Found</div>
      ) : (
      sortedData.map( ({ Combined_Key, Confirmed, Recovered, Deaths }, index) => 
        <LocationInfo 
          key={index} 
          name={Combined_Key} 
          totalCases={Confirmed} 
          totalRecovered={Recovered} 
          totalDeaths={Deaths} 
        />
      ))
    }
  </ul>
)

const mapStateToProps = state => ({
  sortedData: selectSortedData(state)
})

export default connect(mapStateToProps)(LocationsList);