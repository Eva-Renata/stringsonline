import footerpicture from "../../images/footer.png";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footerwrapper}>
      <img src={footerpicture} alt="footerpicture" />
    </footer>
  );
};
