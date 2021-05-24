import React from 'react';
import './SearchResult.sass';

export function SearchResult({ id, authors, title, url, cover }) {
  return (
    <div key={id + Math.random} className="search-result">
      <div className="search-result__image">
        <img src={`http://covers.openlibrary.org/b/olid/${cover}-L.jpg`} alt="" />
      </div>
      <div className="search-result__title">
        {authors.map(author => <span className="author">{author}</span>)}
        <h2>{title}</h2>
        {/* <a href={`https://openlibrary.org/${url}`}>Book</a>
        <div>{url}</div> */}
      </div>
    </div>
  )
}