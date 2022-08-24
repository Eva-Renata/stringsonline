import hero from "../../images/hero-banner.png";
import styles from "./Forside.module.scss";

export const Forside = () => {
  return (
    <section className={styles.forsidewrapper}>
      <img src={hero} alt="hero" />
      {/* <Produkter /> */}
    </section>
  );
};
