import './App.css';
import MovieList from './MovieList';
import MoviePage from './MoviePage';
import {Route, Routes} from "react-router-dom"

function App() {
  return (


    <div className="App">
    <Routes>
    <Route path="" element={<MovieList />} />
    <Route path="/Movie/:id" element={<MoviePage/>} />
    </Routes>

    </div>
  );
}

export default App;
