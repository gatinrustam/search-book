import React from 'react';
import './SearchForm.sass';

export function SearchForm({value, updateChangeHandle}) {

  return (
    <div className="search">
      <input 
      type="text" 
      value={value} 
      onChange={e => updateChangeHandle(e)}
      placeholder="By title of book" 
      autoFocus={true} />
      <button 
        type="button"
        className="search__button"
      >Find</button>
  </div>
  )
}