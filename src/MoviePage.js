import star from "./Img/etoile.png";
import { useNavigate, useParams } from "react-router-dom";
import MovieJson from "./Movies.json";
function MoviePage() {


  let x = parseInt(useParams().id);

  console.log(useParams());

  const navigate = useNavigate();

  return (
    <>
    <a style={{textDecoration: "underline", cursor: "pointer"}}onClick={() => {navigate("/")}}>Back to home</a>
    <div className="MoviePage">
      <div>
        <h2>
        Title: {MovieJson[x].title} 
        </h2>
        <h2>
            Rating: ({MovieJson[x].rating}{" "}
          <img src={star} width="20px" />)
        </h2>
        <br/>

        <iframe width="560" height="315" src={MovieJson[x].trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


        <br />
        <h2>Description: </h2>
        <small>{MovieJson[x].description}</small>
      </div>

      <img
        src={MovieJson[x].posterURL}
        style={{ marginLeft: "20px", width: "360px" }}
      />
    </div>
    </>
  );
}

export default MoviePage;
