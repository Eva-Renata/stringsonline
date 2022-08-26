import logo from "../../images/header-bg.png";
import styles from "./Header.module.scss";
import { BsArrowRightSquare } from "react-icons/bs";
import kurv from "../../images/cart-icon.png";
import mail from "../../images/mail-icon.png";
import phone from "../../images/phone-icon.png";
import { NavLink } from "react-router-dom";
import { useLoginStore } from "../../Pages/Login/useLoginStore";

export const Header = (props) => {
  const { loggedIn } = useLoginStore((store) => ({
    loggedIn: store.loggedIn,
  }));

  const products = props.products;
  const search = (value) => {
    if (!value) {
      props.setFilteredProducts([]);
    } else {
      const filtered = products.filter((product) => {
        return (
          // searching (filtering) between names or brands
          product.name.toLowerCase().includes(value) ||
          product.brand.toLowerCase().includes(value)
        );
      });
      props.setFilteredProducts(filtered);
    }
  };

  return (
    <header className={styles.topwrapper}>
      {/* logo image with click on goes to homepage */}
      <a href={"/"}>
        <img src={logo} alt="logo" className={styles.logoimage} />
      </a>
      {/* toplinks in header */}
      <div className={styles.toplinks}>
        <NavLink to={"/"} className={styles.kontaktlinks}>
          Forside
        </NavLink>
        <NavLink to={"/betingelser"} className={styles.kontaktlinks}>
          Salgs- og handelsbetingelser
        </NavLink>
        <NavLink to={"/login"}>
          <button className={styles.loginbutton}>
            {/* button interface changes */}
            {!loggedIn ? "Login " : "Log ud "}
          </button>
        </NavLink>
      </div>
      {/* right side of the header */}
      <div className={styles.topright}>
        <div className={styles.kontakt}>
          <img src={mail} alt="mail" />
          <span className={styles.kontaktspan}>SALES@STRINGSONLINE.COM</span>
          <img src={phone} alt="phone" />
          <span className={styles.kontaktspan}>+45 98 12 22 68</span>
          <img src={kurv} alt="kurv" />
        </div>
        <input
          type="text"
          placeholder={"Indtast søgeord"}
          onChange={(e) => {
            search(e.target.value.toLowerCase());
          }}
        />
        <BsArrowRightSquare />
      </div>
      <div className={styles.logindiv}>
        {!loggedIn ? "Du er ikke logget ind " : "Du er logget ind "}
      </div>
    </header>
  );
};
