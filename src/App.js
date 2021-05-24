import './App.sass';
import { Provider } from "react-redux";
import { store } from "./store";
import { SearchResultList } from './components/SearchResultList/SearchResultList';
import { Header } from './components/Header/Header';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <SearchResultList />
      </div>
    </Provider>
  );
}

export default App;