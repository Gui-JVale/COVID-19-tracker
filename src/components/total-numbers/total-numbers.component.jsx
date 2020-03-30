import React from 'react'; 

import './total-numbers.styles.sass'; 

const TotalNumbers = ({ title, number }) => {
  const stringToClassName = str => str.replace(/ /g, "-").toLowerCase();

  return (
    <div className="total-numbers">
      <div className={`total-numbers__title total_numbers__title--${stringToClassName(title)}`}>
        <h2 className="heading-secondary">{title}</h2>
      </div>
      <div className={`total-numbers__number total-numbers__number--${stringToClassName(title)}`}>
        {number}
      </div>
    </div>
)};

export default TotalNumbers;