import { useState } from "react";
import Search from "./components/Search.jsx";

const App = () => {
  const[SearchTerm, setSearchTerm] = useState('I AM BATMAN')

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
        <Search searchTerm ={searchTerm} setSearchTerm={setSearchterm} />
      </div>
    </main>
  );
};

export default App;
