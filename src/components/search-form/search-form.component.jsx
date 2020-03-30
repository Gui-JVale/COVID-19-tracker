import React from 'react';

import './search-form.styles.sass';
import Input from '../input/input.component';

const SearchForm = ({handleChange}) => (
  <div className="search-form u-margin-bottom-small">
    <form  className="search-form__form">
      <Input 
        type="text" 
        name="search-location" 
        id="search-location" 
        label="Search"
        placeholder="Search Locations"
        handleChange={handleChange}
      />      
    </form>
  </div>
);

export default SearchForm;