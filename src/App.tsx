import "./App.css";
import MoviesContextProvider from "./contexts/MoviesContext";

import Navbar from "./components/Navbar";
import ToggleThemeBtn from "./components/ToggleThemeBtn";
import ProgressContextProvider from "./contexts/ProgressContext";
import ThemeContextProvider from "./contexts/ThemeContext";
import Movies from "./components/Movies";
import AuthContextProvider from "./contexts/AuthContext";
import { Grid } from "@material-ui/core";
import TopMovies from "./components/TopMovies";
import TopMoviesContextProvider from "./contexts/TopMoviesContext";

function App() {
  return (
    <div>
      <TopMoviesContextProvider>
        <AuthContextProvider>
          <MoviesContextProvider>
            <ThemeContextProvider>
              <ProgressContextProvider>
                <Navbar />
                <Grid container>
                  <Grid item xs={4}>
                    <TopMovies />
                  </Grid>
                  <Grid item xs={8}>
                    <Movies />
                  </Grid>
                </Grid>
                <ToggleThemeBtn />
              </ProgressContextProvider>
            </ThemeContextProvider>
          </MoviesContextProvider>
        </AuthContextProvider>
      </TopMoviesContextProvider>
    </div>
  );
}

export default App;
