import { useState } from 'react';
import './App.sass';
import { SearchBook } from './components/SearchBook/SearchBook';
import { SearchResultList } from './components/SearchResultList/SearchResultList';

function App() {
  const [value, setValue] = useState('');
  const [searchAnswer, setSearchAnswer] = useState([]);

  const updateChangeHandle = (e, answer) => {
    const {value} = e.target;
    setValue(value);
    setSearchAnswer(answer);
  }

  console.log(searchAnswer)

  return (
    <div className="App">
      <SearchBook 
        value={value}
        updateChangeHandle={updateChangeHandle}
      />
      <SearchResultList />
    </div>
  );
}

export default App;
