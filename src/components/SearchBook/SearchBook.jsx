import React from 'react';
import './SearchBook.sass';

export function SearchBook({value, updateChangeHandle}) {

  return (
    <div className="search">
      <input 
      type="text" 
      value={value} 
      onChange={e => updateChangeHandle(e)}
      placeholder="By title of book" />
      <button 
        type="button"
        className="search__button"
      >Find</button>
  </div>
  )
}