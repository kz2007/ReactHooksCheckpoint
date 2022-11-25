import star from './Img/etoile.png'
function MovieCard(props) {
  let [title, description, posterURL, rating] = Object.values(props.movie);
  return (
    <div className="MovieCard">
    <div>
      <h2>{title} ({rating} <img src={star} width="20px"/>)</h2>
      <br/>
      <small>{description}</small>
      </div>
      
      <img src={posterURL} style={{marginLeft: "20px", width: "160px"}} />
    </div>
  );
}

export default MovieCard;
