import "./Beer.scss";

const Beer = props => {
  //destructuring
  const { image_url, name, tagline, first_brewed, abv, classic_range, ph, description } = props;

  return (
    <div className="beer">
      <img src={image_url} alt={name} />
      <p>Name:{name}</p>
      <p>Tagline: {tagline}</p>
      <p>First brewed: {first_brewed}</p>
      <p>ABV: {abv}</p>
      <p>Classic Range: {classic_range}</p>
      <p>PH: {ph}</p>
      <p>Description:{description}</p>
    </div>
  );
};

export default Beer;
