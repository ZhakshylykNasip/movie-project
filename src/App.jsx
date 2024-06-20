import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { useState } from "react";
import { movies } from "./utils/constants";
import { ModalUi } from "./components/modal/ModalUi";
import { MyButton } from "./components/uiButton/MyButton";

function App() {
  const [movie, setMovie] = useState(movies);
  const [openModal, setOpenModal] = useState(false);

  const [movieImage, setMovieImage] = useState("");
  const [movieTitle, setMovieTitle] = useState("");
  const [movieStatus, setMovieStatus] = useState("");
  const [editMovieId, setEditMovieId] = useState(null);

  // delete movie
  const deleteMovieHandler = (id) => {
    const remainderMovie = movie.filter((item) => item.movieId !== id);
    setMovie(remainderMovie);
  };

  // open and close modal
  const openAndCloseModalHandler = (movie = null) => {
    setOpenModal((state) => !state);
    if (movie) {
      setMovieImage(movie.movieImage);
      setMovieTitle(movie.movieTitle);
      setMovieStatus(movie.movieStatus);
      setEditMovieId(movie.movieId);
    } else {
      setMovieImage("");
      setMovieTitle("");
      setMovieStatus("");
      setEditMovieId(null);
    }
  };

  // input values
  const handleMovieImageChange = (event) => {
    setMovieImage(event.target.value);
  };
  const handleMovieTitleChange = (event) => {
    setMovieTitle(event.target.value);
  };
  const handleMovieStatusChange = (event) => {
    setMovieStatus(event.target.value);
  };

  const addMovie = () => {
    const newMovie = {
      movieImage: movieImage,
      movieTitle: movieTitle,
      movieStatus: movieStatus,
      movieId: editMovieId || Date.now(),
    };

    if (editMovieId) {
      setMovie(
        movie.map((item) => (item.movieId === editMovieId ? newMovie : item))
      );
    } else {
      setMovie([...movie, newMovie]);
    }

    openAndCloseModalHandler();
  };

  return (
    <div>
      {openModal && (
        <ModalUi onClose={openAndCloseModalHandler}>
          <div className="wrapper-inputs">
            <input
              type="text"
              className="modal-input"
              placeholder="Ссылка на фото"
              value={movieImage}
              onChange={handleMovieImageChange}
            />
            <input
              type="text"
              className="modal-input"
              placeholder="Название фильма"
              value={movieTitle}
              onChange={handleMovieTitleChange}
            />
            <input
              type="text"
              className="modal-input"
              placeholder="Статус фильма"
              value={movieStatus}
              onChange={handleMovieStatusChange}
            />
          </div>
          <div className="wrapper-buttons">
            <MyButton className="buyBtn" onClick={openAndCloseModalHandler}>
              Отменить
            </MyButton>
            <MyButton className="buyBtn" onClick={addMovie}>
              Добавить
            </MyButton>
          </div>
        </ModalUi>
      )}
      <Header openAndCloseModalHandler={openAndCloseModalHandler} />
      <Main
        movie={movie}
        deleteMovieHandler={deleteMovieHandler}
        openAndCloseModalHandler={openAndCloseModalHandler}
      />
      <Footer />
    </div>
  );
}

export default App;
