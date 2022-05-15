import "./App.css";
import beers from "./data/beers";
import Card from "./components/Main/Card/Card";

const App = () => {
  const beersJSX = beers.map((beer) => {
    return (
      <Card
        name={beer.name}
        tagline={beer.tagline}
        first_brewed={beer.first_brewed}
        description={beer.description}
      />
    );
  });

  return (
    <>
      <section className="beerCards">{beersJSX}</section>
    </>
  );
};

export default App;
