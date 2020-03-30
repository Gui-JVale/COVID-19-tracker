import React from 'react';

import './location-info.styles.sass';

const LocationInfo = ({ name, totalCases, totalRecovered, totalDeaths }) => {
  const formatNumber = n => n.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  return (
    <li className="location-info">
      <span className="location-info__name">{name}</span>
      <span className="location-info__numbers">
        <span className="location-info__numbers--confirmed">{formatNumber(totalCases)}</span>&nbsp; &mdash; &nbsp;
        <span className="location-info__numbers--recovered">{formatNumber(totalRecovered)}</span>&nbsp; &mdash; &nbsp;
        <span className="location-info__numbers--deaths">{formatNumber(totalDeaths)}</span>
      </span>
    </li> 
  )
}
export default LocationInfo;