import './App.sass';
import { Provider } from "react-redux";
import { store } from "./store";
import { SearchBookList } from './components/SearchBookList/SearchBookList';
import { Header } from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <SearchBookList />
      </div>
    </Provider>
  );
}

export default App;