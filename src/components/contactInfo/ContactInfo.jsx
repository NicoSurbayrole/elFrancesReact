import ubicacion from "../../assets/ubicacion.svg";
import telefono from "../../assets/telefono.svg";
import mail from "../../assets/mail.svg";
import horario from "../../assets/horario.svg";
import style from "./contactInfo.module.css";

const ContactInfo = () => {
  return (
    <div className={style.info_container}>
      <h2>Información de contacto</h2>
      <ul className={style.info_list}>
        <li>
          <img src={ubicacion} alt="icono de ubicacion" />
          Inclán 3064 (CP1258), CABA, Argentina
        </li>
        <li>
          <img src={telefono} alt="icono del telefono" />
          +54 11 2285385
        </li>
        <li>
          <img src={mail} alt="icono del mail" />
          info@elfrances.com.ar
        </li>
      </ul>
      <h2>Horario de atención</h2>
      <div className={style.horario}>
        <img src={horario} alt="icono del horario" />
        <p>
          Lunes a Viernes: 9:00 AM - 6:00 PM Sábados: 10:00 AM - 2:00 PM
          Domingos: Cerrado
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
