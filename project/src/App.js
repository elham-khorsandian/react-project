import { useState, useEffect } from "react";
import "./App.css";
import beers from "./data/beers";
import Beer from "./components/Beer/Beer";
import Search from "./components/Search/Search";
import Filter from "./components/Filter/Filter";

const App = () => {
  const [searchedBeers, setSearchedBeers] = useState(beers);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState("all");
  useEffect(() => {
    executeFilter();
  }, [searchTerm, filterTerm]);
  // const getBeers = async () => {};
  const beerJSX = searchedBeers.map((beer, index) => {
    return (
      <Beer
        //shall I write name={index.beer.name}?
        image_url={beer.image_url}
        name={beer.name}
        tagline={beer.tagline}
        first_brewed={beer.first_brewed}
        abv={beer.abv}
        classic_range={beer.classic_range}
        ph={beer.ph}
        description={beer.description}
      />
    );
  });
  const executeFilter = () => {
    let newBeers = beers.filter((beer) => {
      if (beer.name.toLowerCase().indexOf(searchTerm.toLowerCase()) != -1) {
        return true;
      } else {
        return false;
      }
    });
    switch (filterTerm) {
      case "ABV": {
        newBeers = newBeers.filter((beer) => {
          if (beer.abv > 6.0) {
            return true;
          } else {
            return false;
          }
        });
        break;
      }
      case "acidic": {
        newBeers = newBeers.filter((beer) => {
          if (beer.ph < 4.0) {
            return true;
          } else {
            return false;
          }
        });
        break;
      }
    }
    setSearchedBeers(newBeers);
  };

  const searchChanged = (searchValue) => {
    setSearchTerm(searchValue);
  };

  const filterChanged = (filterValue) => {
    setFilterTerm(filterValue);
  };

  return (
    <>
      <div className="homePage">
        <div className="navBar">
          <Search onChange={searchChanged} />
          <Filter onChange={filterChanged} />
        </div>
        <section className="beers">{beerJSX}</section>
      </div>
    </>
  );
};

export default App;
