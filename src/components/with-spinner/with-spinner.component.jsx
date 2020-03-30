import React from 'react';

import './with-spinner.styles.sass';

const WithSpinner = WrapperComponent => {
  const Spinner = ({isLoading, ...otherProps}) => {
    return isLoading ? (
      <div className="spinner-overlay">
        <div className="spinner-container"></div>
      </div>
    ) : (
      <WrapperComponent {...otherProps} />
    );
  }
  return Spinner;
}
export default WithSpinner;