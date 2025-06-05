import "./assets/css/App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { SearchProvider } from "./contexts/SearchContext";

function App() {
  return (
    <>
      <SearchProvider>
        <Header />
        <Main />
      </SearchProvider>
    </>
  );
}

export default App;
