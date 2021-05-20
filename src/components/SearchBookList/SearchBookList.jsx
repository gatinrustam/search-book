import React, { useState, useEffect } from 'react';
import { SearchBook } from '../../components/SearchBook/SearchBook';
import { Loading } from '../../components/Loading/Loading';
// import { SearchResult } from '../../components/SearchResult/SearchResult';

export function SearchBookList() {  
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [docs, setDocs] = useState([]);

  const [value, setValue] = useState('');

  const updateChangeHandle = (e) => {
    const {value} = e.target;
    setValue(value);
  }

  console.log(value)
  // Примечание: пустой массив зависимостей [] означает, что
  // этот useEffect будет запущен один раз
  // аналогично componentDidMount()
  useEffect(() => {
    fetch(`http://openlibrary.org/search.json?title=${value}`)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setDocs(result.docs);
        },
        // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
        // чтобы не перехватывать исключения из ошибок в самих компонентах.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [value])


  return (
    <div>
      <SearchBook 
        value={value}
        updateChangeHandle={updateChangeHandle}
      />
      {error && <div>error</div>}
      {!isLoaded ? <Loading /> : ''}
      {docs.map(item => (
        <li key={item.key}>
          {item.title}
        </li>
      ))}
      {/* <SearchResult /> */}
    </div>
  )
}