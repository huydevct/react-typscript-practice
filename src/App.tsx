import "./App.css";
import MoviesContextProvider from "./contexts/MoviesContext";

import Navbar from "./components/Navbar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import Movies from "./components/Movies";

function App() {
  return (
    <div>
      <MoviesContextProvider>
        <ThemeContextProvider>
          <ProgressContextProvider>
            <Navbar />
            <Movies />
            <ToggleThemeBtn />
          </ProgressContextProvider>
        </ThemeContextProvider>
      </MoviesContextProvider>
    </div>
  );
}

export default App;
