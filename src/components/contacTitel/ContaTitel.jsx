import style from "./contacTitel.module.css";
import ContactForm from "../contactForm/ContactForm";
const ContactTitel = () => {
  return (
    <div className={style.container}>
      <header className={style.header}>
        <h1>Contacto</h1>
        <div>
          <p>
            ¿Tienes alguna pregunta o consulta? Estamos aquí para ayudarte.
            Completa el formulario a continuación y nos pondremos en contacto
            contigo lo antes posible.
          </p>
        </div>
      </header>
       <ContactForm />   
    </div>
  );
};

export default ContactTitel;
