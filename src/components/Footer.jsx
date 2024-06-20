import "./Footer.css";

function Footer() {
  return (
    <footer>
      <section className="footer_block">
        <h2>О нас</h2>
        <p>О компании</p>
        <p>Контакты</p>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
      </section>
      <section className="footer_block">
        <h2>Помощь</h2>
        <p>F.A.Q.</p>
        <p>Сообщить об ошибке</p>
      </section>
      <section className="footer_block">
        <h2>Социальные сети</h2>
        <p>Instagram</p>
        <p>Facebook</p>
        <p>Telegram</p>
      </section>
      <section className="footer_block">
        <h2>Скачать приложение</h2>
        <div className="footer_applications">
          <img src="https://shorturl.at/ZIHmH" alt="" />
          <img src="https://etnomedia.tv/assets/svgs/appstore.svg" alt="" />
          <img
            src="https://etnomedia.tv/assets/svgs/microsoft-store.svg"
            alt=""
          />
        </div>
      </section>
    </footer>
  );
}

export default Footer;
