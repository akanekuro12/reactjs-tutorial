import { useEffect, useState } from "react";
import Search from "./components/Search.jsx";

const API_BASE_URL = 'https://api.themoviedb.org/3/discover/movie'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY

const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${API_KEY}`
  }

}
const App = () => {
  const[SearchTerm, setSearchTerm] = useState('')
  useEffect(() => {}, []);

  return (
    <main>
      <div className="pattern"></div>

      <div className="wrapper">
        <header>
          <img src="./hero-img.png" alt="Hero-image" />
          <h1>
            Find <span className="text-gradient"> Movies</span> You'll Enjoy
            Without the Hassle{" "}
          </h1>
        </header>
        <Search searchTerm ={SearchTerm} setSearchTerm={setSearchTerm} />
      </div>
    </main>
  );
};

export default App;
