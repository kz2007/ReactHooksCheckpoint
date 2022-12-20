import star from './Img/etoile.png'
import { useNavigate } from "react-router-dom";
function MovieCard(props) {
  let [id,title, description, posterURL, rating] = Object.values(props.movie);
  
  const navigate = useNavigate();

  return (
    
    <div className="MovieCard">
    <div>
      <h2>{title} ({rating} <img src={star} width="20px"/>)</h2>
      <br/>
      <small>{description}</small>
      <button onClick={() => navigate("/Movie/" + id)} style={{cursor: "pointer"}}>See more...</button>
      </div>
      
      <img src={posterURL} style={{marginLeft: "20px", width: "160px"}} />
    </div>
  );
}

export default MovieCard;
