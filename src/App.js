import './App.sass';
import { Provider } from "react-redux";
import { store } from "./store";
import { SearchBookList } from './components/SearchBookList/SearchBookList';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Search for books</h1>
        <SearchBookList />
      </div>
    </Provider>
  );
}

export default App;