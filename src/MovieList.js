import MovieCard from "./MovieCard";
import Filter from "./Filter";
import { useState, useEffect, useRef } from "react";

function MovieList() {
  const [MoviesComponents, SetMoviesComponent] = useState();

  const [FilterState, SetFilterState] = useState();
  const [Movies, SetMovies] = useState([
    {
      title: "Dora",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam alias, magnam provident exercitationem officia voluptates nostrum non, dicta sapiente, deserunt blanditiis quos saepe facilis at! Necessitatibus quaerat quasi exercitationem.",
      posterURL:
        "https://cdn.shopify.com/s/files/1/0969/9128/products/Dora_The_Explorer_And_The_Lost_City_Of_Gold_-_Hollywood_English_Movie_Poster_1_66c87e56-24a2-4135-b709-a6b98a7f7bce.jpg?v=1577693664",
      rating: 3.5,
    },
    {
      title: "Shrek",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam alias, magnam provident exercitationem officia voluptates nostrum non, dicta sapiente, deserunt blanditiis quos saepe facilis at! Necessitatibus quaerat quasi exercitationem.",
      posterURL:
        "https://images.squarespace-cdn.com/content/v1/5acd17597c93273e08da4786/1547847934765-ZOU5KGSHYT6UVL6O5E5J/Shrek+Poster.png",
      rating: 4.5,
    },
    {
      title: "Harry Potter",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam alias, magnam provident exercitationem officia voluptates nostrum non, dicta sapiente, deserunt blanditiis quos saepe facilis at! Necessitatibus quaerat quasi exercitationem.",
      posterURL:
        "https://blog.simplified.com/wp-content/uploads/2021/06/harry-potter-and-the-sorcerers-stone.png",
      rating: 5,
    },
    {
      title: "Back to the Future",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi veniam alias, magnam provident exercitationem officia voluptates nostrum non, dicta sapiente, deserunt blanditiis quos saepe facilis at! Necessitatibus quaerat quasi exercitationem.",
      posterURL:
        "https://m.media-amazon.com/images/I/71BPuv+iRbL.jpg",
      rating: 4.5,
    },
  ]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [posterURL, setPosterURL] = useState("");
  const [rating, setRating] = useState("");

  const handleSubmit = (event) => {
    AddMovie();
    
    setName("");
    setDescription("");
    setPosterURL("");
    setRating("");

    event.preventDefault();
  };

  const AddMovie = () => {
    SetMovies([
      ...Movies,
      {
        title: name,
        description: description,
        posterURL: posterURL,
        rating: rating,
      },
    ]);
  };
  

  useEffect(() => {
    
    if (FilterState == 0) strAscending();
    else if (FilterState == 1) strDescending();
    else if (FilterState == 2) ratAscending();
    else if (FilterState == 3) ratDescending();
    else strAscending();
    console.log(FilterState);
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
  );
}

export default MovieList;
