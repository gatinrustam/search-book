import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SearchForm } from '../SearchForm/SearchForm';
import { Loading } from '../Loading/Loading';
import { Error } from '../Error/Error';
import { SearchResult } from '../SearchResult/SearchResult';
// import { Modal } from '../Modal/Modal';

// redux state
// not use now
function mapStateToProps(state) {
  return {
    list: state.search
  }
}

// search request from Library Search API
// docs https://openlibrary.org/dev/docs/api/search
// function fetchSearch(searchRequest) {
//   return fetch(`http://openlibrary.org/search.json?title=${searchRequest}`)
//   .then(res => res.json())
//   .then(
//     (result) => {
//       return result.docs;
//     },
//     (error) => {
//       return error;
//     }
//   )
// }

export const SearchResultList = connect(mapStateToProps)(SearchResultList_);

function SearchResultList_() {  
  // const dispatch = useDispatch();

  // const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [docs, setDocs] = useState([]);

  const [value, setValue] = useState("alice");

  const updateChangeHandle = (e) => {
    const {value} = e.target;
    setValue(value);
  }

  // prepare data to render
  const formatData = (books) =>
    books.map((book, index) => ({
      id: index,
      url: book.key,
      author: book.author_name,
      title: book.title,
      cover: book.cover_edition_key
    })).slice(0, 20);


  useEffect(() => {
    setIsLoaded(true);

    setTimeout(async (value) => {
      const res = await fetch(`http://openlibrary.org/search.json?title=${"alice+in"}`);
      const data = await res.json();
      const formatedData = formatData(data.docs);

      console.log(formatedData);

      setIsLoaded(false);
      setDocs(formatedData);
    }, 2000);

  }, []);

  console.log(docs);


  // const [isOpen, setOpen] = useState(false);
  // const [dataModal, setDataModal] = useState({});

  // function handleClick(){
  //   setOpen(prev => !prev);
  // }


  return (
    <main>
      <SearchForm 
        value={value}
        updateChangeHandle={updateChangeHandle}
      />

      <div className="search-results">
        {/* error handle */}
        {/* {error && <Error />} */}

        {/* loading handle */}
        {isLoaded && <Loading />}

        {/* data search handle */}
        {docs.length ? docs.map(item => {
          return (
            <SearchResult
              key={item.id + Math.random}
              id={item.id}
              authors={item.author}
              title={item.title}
              url={item.url}
              cover={item.cover}
            />
          )
        }
        ) : <div></div>}
      </div>
      {/* <Modal active={isOpen} data={dataModal} /> */}
    </main>
  )
}