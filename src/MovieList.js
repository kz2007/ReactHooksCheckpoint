import MovieCard from "./MovieCard";
import Filter from "./Filter";
import { useState, useEffect, useRef } from "react";
import MovieJson from "./Movies.json";

function MovieList() {
  const [MoviesComponents, SetMoviesComponent] = useState();

  const [FilterState, SetFilterState] = useState();
  const [Movies, SetMovies] = useState(MovieJson);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [trailerURL, setTrailerURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    AddMovie();

    setName("");
    setDescription("");
    setPosterURL("");
    setRating("");
    setTrailerURL("");

    event.preventDefault();
  };

  const AddMovie = () => {
    SetMovies([
      ...Movies,
      {
        id:Movies.length,
        title: name,
        description: description,
        posterURL: posterURL,
        rating: rating,
        trailer: trailerURL,
      },
    ]);

    MovieJson = Movies;
  };

  useEffect(() => {
    if (FilterState === 0) strAscending();
    else if (FilterState === 1) strDescending();
    else if (FilterState === 2) ratAscending();
    else if (FilterState === 3) ratDescending();
    else strAscending();
    SetMoviesComponent(
      Movies.map((Movie, index) => <MovieCard key={index} movie={Movie} />)
    );
  }, [Movies, FilterState]);

  function ratAscending() {
    SetMovies([...Movies].sort((a, b) => a.rating - b.rating));
  }
  function ratDescending() {
    SetMovies([...Movies].sort((a, b) => b.rating - a.rating));
  }
  function strAscending() {
    SetMovies([...Movies].sort((a, b) => (a.title[0] > b.title[0] ? 1 : -1)));
  }
  function strDescending() {
    SetMovies([...Movies].sort((a, b) => (a.title[0] > b.title[0] ? -1 : 1)));
  }

  const SetFilter = (currentFilter) => {
    SetFilterState(currentFilter);
  };

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Movies</h1>

      <div className="MovieList">
        <div className="MoviesComponents">
          <Filter SetFilter={SetFilter} />
          {MoviesComponents}
        </div>
        <div className="AddForm">
          <h1> Add your own movie !</h1>
          <form onSubmit={handleSubmit}>
            <label>Name: </label>{" "}
            <input
              type="text"
              name="name"
              placeholder="Movie Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            ></input>
            <br />
            <label>Description: </label>
            <br />
            <textarea
              name="description"
              placeholder="Movie Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <br />
            <label>Poster URL: </label>{" "}
            <input
              type="text"
              name="posterURL"
              placeholder="Poster URL"
              value={posterURL}
              onChange={(e) => setPosterURL(e.target.value)}
            ></input>
            <br />
            <label>Trailer URL: </label>{" "}
            <input
              type="text"
              name="trailerURL"
              placeholder="trailer URL"
              value={trailerURL}
              onChange={(e) => setTrailerURL(e.target.value)}
            ></input>
            <br />
            <label>Rating: </label>
            <input
              type="number"
              name="rating"
              placeholder="Rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            ></input>
            <br />
            <button type="submit">Add !</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default MovieList;
