import { Container } from "@material-ui/core";
import { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SimpleBottomNavigation from "./components/MainNavbar";
import Trending from "./Screens/Trending/Trending";
import Search from "./Screens/Search/Search";
import PopularMovies from "./Screens/PopularMovies/PopularMovies";
import Favourite from "./Screens/Favourite/Favourite";
import { FavouriteContext } from "./Helper/Context";
function App() {
  const [favourites, setFavourites] = useState([]);
  const [content, setContent] = useState([]);
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <FavouriteContext.Provider
          value={{ favourites, setFavourites, content, setContent }}
        >
          <Switch>
            <Route path="/" component={Trending} exact />
            <Route path="/popularMovies" component={PopularMovies} />
            <Route path="/search" component={Search} />
            <Route path="/favourites" component={Favourite} />
          </Switch>
        </FavouriteContext.Provider>
      </div>
      <SimpleBottomNavigation />
    </BrowserRouter>
  );
}

export default App;
