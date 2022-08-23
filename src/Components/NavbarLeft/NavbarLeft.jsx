import styles from "./NavbarLeft.module.scss";

export const NavLeft = () => {
  return (
    <nav className={styles.navigationwrapper}>
      <ul>
        <li>
          <a>Guitarer</a>
          <a>Basser</a>
          <a>Handmade</a>
          <a>Keyboards</a>
          <a>Trommer</a>
          <a>Percussion</a>
          <a>Stryg & Blæs</a>
          <a>Brands</a>
        </li>
      </ul>
    </nav>
  );
};
