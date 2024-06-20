import "./Header.css";
import { MyButton } from "./uiButton/MyButton";

function Header({ openAndCloseModalHandler }) {
  return (
    <header>
      <img className="logo" src="https://shorturl.at/TjVav" alt="logo" />
      <nav className="nav">
        <a href="#">Фильмы</a>
        <a href="#">Сериалы</a>
        <a href="#">Мультфильмы</a>
        <a href="#">Windows</a>
        <a href="#">Календарь</a>
      </nav>
      <div>
        <MyButton className="watch_movie">Смотреть 30 дней за 1с</MyButton>
      </div>
      <div>
        <MyButton className="logoBtn" onClick={openAndCloseModalHandler}>
          Добавить
        </MyButton>
      </div>
    </header>
  );
}

export default Header;
