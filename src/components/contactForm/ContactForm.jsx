import ContactInfo from "../contactInfo/ContactInfo";
import style from "./contactForm.module.css";
const ContactForm = () => {
  return (
    <div className={style.contact_container}>
      <form className={style.contact_form}>
        <label htmlFor="nombre">Nombre completo</label>
        <input type="text" id="nombre" placeholder="NOMBRE" />
        <label htmlFor="email">Correo electrónico</label>
        <input type="email" id="email" placeholder="MAIL" />
        <label htmlFor="telefono">Teléfono</label>
        <input type="tel" id="telefono" placeholder="TELEFONO" />
        <label htmlFor="asunto">Asunto</label>
        <select name="asunto" id="asunto">
          <option disabled value="asunto">
            Selecciona un asunto
          </option>
          <option value="consulta-general">Consulta general</option>
          <option value="consulta-articulo">Consult sobre un articulo</option>
          <option value="remates-info">Informacion sobre remates</option>
          <option value="Tasacion">Solicitud de tasación</option>
          <option value="otro">otro</option>
        </select>
        <label htmlFor="mensaje">Mensaje</label>
        <textarea
          name="mensaje"
          id="mensaje"
          placeholder="DESCRIPCION POR LA CUAL TE CONTACTAS"
        ></textarea>
        <button className={style.btn}>Enviar Mensaje</button>
      </form>
      <ContactInfo/>
    </div>
  );
};

export default ContactForm;
