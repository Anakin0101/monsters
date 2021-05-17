import React from 'react';

import './search-box.style.css'

const SearchBox =({placeholder,type, onChange}) => (
    <input
    className="search"
    type={type}
    placeholder={placeholder}
    onChange={onChange}
  />
)

export default SearchBox