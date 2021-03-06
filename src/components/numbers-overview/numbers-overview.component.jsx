import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './numbers-overview.styles.sass';

import { selectTotalNumbers } from '../../redux/data/data.selectors';

import TotalNumbers from '../total-numbers/total-numbers.component';

const NumbersOverview = ({totalNumbers}) => (
  <div className="numbers-overview">
    {totalNumbers.map(( {name, number}, index ) => (
      <TotalNumbers key={index} title={name} number={number} />
    ))}
  </div>
)

const mapStateToProps = createStructuredSelector({
  totalNumbers: selectTotalNumbers,
});

export default connect(mapStateToProps)(NumbersOverview);