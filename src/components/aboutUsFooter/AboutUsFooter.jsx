import style from "./aboutUsFooter.module.css";

const AboutUsFooter = () => {
  return (
    <footer className={style.footer}>
      <h3>Suscribite a nuestro newsletter</h3>
      <form>
        <input type="email" placeholder="Tu correo electronico" />
        <button>Suscribirme</button>
      </form>
    </footer>
  );
};

export default AboutUsFooter;
