import AboutUsImg from "../aboutUsImg/AboutUsImg";
import AboutUsInfo from "../aboutUsInfo/AboutUsInfo";
import style from "./aboutUs.module.css";

const AboutUs = () => {
  return (
    <section>
      <div className={style.container} >
        <div className={style.info_contain}>
          <AboutUsImg/>
          <AboutUsInfo/>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
