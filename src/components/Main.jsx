import "./Main.css";

import { MyButton } from "./uiButton/MyButton";

export function Main({ movie, deleteMovieHandler, openAndCloseModalHandler }) {
  return (
    <main className="main">
      <h2>АКЫРКЫ ЧЫККАН ТАСМАЛАР</h2>
      <section className="movies_container">
        {movie.map((item) => (
          <div className="movie-block" key={item.movieId}>
            <img className="movie-images" src={item.movieImage} alt="Чон кыз" />
            <article className="wrapper_info">
              <div>
                <h4 className="movie-title">{item.movieTitle}</h4>
                <p className="movie-status">{item.movieStatus}</p>
              </div>
              <div className="wrapperButtons">
                <MyButton
                  className="buyBtn"
                  onClick={() => deleteMovieHandler(item.movieId)}
                >
                  Удалить
                </MyButton>
                <MyButton
                  className="buyBtn"
                  onClick={() => openAndCloseModalHandler(item)}
                >
                  Изменить
                </MyButton>
              </div>
            </article>
          </div>
        ))}
      </section>
    </main>
  );
}

export default Main;
