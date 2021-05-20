import React from 'react';

// http://openlibrary.org/search.json?title=the+lord+of+the+rings
function fetchSearch(title) {
  return fetch(`http://openlibrary.org/search.json?title=${title}`)
    .then(response => response.json())
    .then(data => {
      const list = data.docs.map(searchResult => {
        return {
          id: searchResult.key,
          title: searchResult.title,
          cover: searchResult.cover_i
        }
      });

      return list;
    });
}

export function SearchBook({value, updateChangeHandle}) {

  const searchAnswer = fetchSearch(value).then(list => list);

  console.log(searchAnswer)

  return (
    <div className="search">
      <input 
      type="text" 
      value={value} 
      onChange={e => updateChangeHandle(e, searchAnswer)}
      placeholder="Search for books" />
  </div>
  )
}