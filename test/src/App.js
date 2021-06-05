import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, Switch } from "react-router-dom";
import './App.css';
import { useState } from "react";
import data from "./Data";
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";
import Filter from "./components/Filter";
import Description from "./components/description"
import Navigation from "./components/navbar"

function App() {
    const [movies, setMovies] = useState(data);
    const [nameSearch, setNameSearch] = useState("");
    // 1 declaring the  FUNCTION TO ADD MOVIE
    const add = (newMovie) => setMovies([...movies, newMovie]);
    const changeInput = (e) => setNameSearch(e);

    return (
        <div>
<Navigation></Navigation>

        <Switch>
   


    <Route  exact path="/home">
           <div className="header">
                <AddMovie add={add} />
                <Filter changeInput={changeInput} />
            </div>
        
            <MovieList movies={movies} nameSearch={nameSearch} />
           </Route>
      

            <Route
                    
                    path="/description/:name"
                    component={Description}
                />  

               
                </Switch>
                </div>
        
    );
    

}

export default App;