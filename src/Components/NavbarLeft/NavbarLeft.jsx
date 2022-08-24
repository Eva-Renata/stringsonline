import { NavLink } from "react-router-dom";
import styles from "./NavbarLeft.module.scss";

export const NavLeft = (props) => {
  return (
    <nav className={styles.navigationwrapper}>
      <ul>
        {props &&
          props.navItems.map((value, index) => {
            return (
              <li key={index}>
                <NavLink to={value.path}>{value.name}</NavLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
