import './App.sass';
import { SearchBookList } from './components/SearchBookList/SearchBookList';

function App() {
  return (
    <div className="App">
      <h1>Search for books</h1>
      <SearchBookList />
    </div>
  );
}

export default App;