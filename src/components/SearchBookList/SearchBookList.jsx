import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { SearchBook } from '../../components/SearchBook/SearchBook';
import { Loading } from '../../components/Loading/Loading';
import { Error } from '../../components/Error/Error';
import { SearchResult } from '../../components/SearchResult/SearchResult';
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
function fetchSearch(searchRequest) {
  return fetch(`http://openlibrary.org/search.json?title=${searchRequest}`)
  .then(res => res.json())
  .then(
    (result) => {
      return result.docs;
    },
    (error) => {
      return error;
    }
  )
}

export const SearchBookList = connect(mapStateToProps)(SearchBookList_);

function SearchBookList_() {  
  // const dispatch = useDispatch();

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [docs, setDocs] = useState([]);

  const [value, setValue] = useState("lord+of+the+rings");

  const updateChangeHandle = (e) => {
    const {value} = e.target;
    setValue(value);
    
    // dispatch(setDocs);
  }


  useEffect(() => {
    setIsLoaded(true);
    fetchSearch(value)
      .then(preload => {
        setDocs(preload);
        console.log(preload)
        setIsLoaded(false);
      })
      .then(error => {
        setError(error);
      })
  }, [value]);

  // prepare data to render
  const preloadData = docs.map(doc => {
    return {
      id: doc.key + doc.type,
      url: doc.key,
      title: doc.title,
      cover: doc.cover_edition_key
    }
  }).slice(0, 5);

  // const [isOpen, setOpen] = useState(false);
  // const [dataModal, setDataModal] = useState({});

  // function handleClick(){
  //   setOpen(prev => !prev);
  // }


  return (
    <main>
      <SearchBook 
        value={value}
        updateChangeHandle={updateChangeHandle}
      />

      <div className="search-results">
        {/* error handle */}
        {error && <Error />}

        {/* loading handle */}
        {isLoaded && <Loading />}

        {/* data search handle */}
        {preloadData.length ? preloadData.map(item => {
          return (
            <SearchResult
              key={item.id}
              url={item.url}
              title={item.title}
              cover={item.cover}
            />
          )
        }
        ) : <div>not found</div>}
      </div>
      {/* <Modal active={isOpen} data={dataModal} /> */}
    </main>
  )
}