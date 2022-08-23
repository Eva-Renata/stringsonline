import logo from "../../images/header-bg.png";
import styles from "./Header.module.scss";
import { BsArrowRightSquare } from "react-icons/bs";
import kurv from "../../images/cart-icon.png";
import mail from "../../images/mail-icon.png";
import phone from "../../images/phone-icon.png";
//import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className={styles.topwrapper}>
      <img src={logo} alt="logo" className={styles.logoimage} />
      <div className={styles.toplinks}>
        <a className={styles.kontaktlinks}>Forside</a>
        <a className={styles.kontaktlinks}>Salgs- og handelsbetingelser</a>
        <button className={styles.loginbutton}>Login</button>
      </div>
      <div className={styles.topright}>
        <div className={styles.kontakt}>
          <img src={mail} alt="mail" />
          <span>SALES@STRINGSONLINE.COM</span>
          <img src={phone} alt="phone" />
          <span>+45 98 12 22 68</span>
          <img src={kurv} alt="kurv" />
        </div>
        <input type="text" placeholder={"Indtast søgeord"} />
        <BsArrowRightSquare />
      </div>
    </header>
  );
};
